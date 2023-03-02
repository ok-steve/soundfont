// Duplicated in data folder.
const soundfonts = ['FluidR3_GM', 'MusyngKite', 'FatBoy'];

const openDB = (name, version, { upgrade }) =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);

    request.onupgradeneeded = (e) => {
      upgrade(request.result, e.oldVersion, e.newVersion, request.transaction);
    };

    request.onerror = (e) => {
      reject(e.target.result);
    };

    request.onsuccess = (e) => {
      resolve(e.target.result);
    };
  });

const getFromStorage = (db, storeName, key) =>
  new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.get(key);

    request.onsuccess = (e) => {
      resolve(e.target.result);
    };

    request.onerror = (e) => {
      reject(e.target.result);
    };
  });

const addToStorage = (db, storeName, key, data) =>
  new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);

    transaction.oncomplete = (e) => {
      resolve(e);
    };

    transaction.onerror = (e) => {
      reject(e);
    };

    store.add(data, key);
  });

const storage = openDB('soundfont', 1, {
  upgrade(db) {
    soundfonts.forEach((soundfont) => {
      db.createObjectStore(soundfont);
    });
  },
});

function memoizeWithStorage(callback) {
  const returnFn = ({ storeName, key }) =>
    storage
      .then((db) => getFromStorage(db, storeName, key))
      .then((data) => {
        if (data) return data;

        return callback({ storeName, key })
          .then((result) =>
            storage.then((db) => addToStorage(db, storeName, key, result))
          )
          .then(() => returnFn({ storeName, key }));
      });

  return returnFn;
}

function httpFetch(url, { method = 'GET', responseType = 'text' } = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.responseType = responseType;
    xhr.open(method, url);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      }
    };

    xhr.send();
  });
}

const decodeBase64 = (base64) => {
  const raw = atob(base64);
  const len = raw.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i += 1) {
    bytes[i] = raw.charCodeAt(i);
  }

  return bytes.buffer;
};

const noteToMIDI = (note) => {
  const PITCH_CLASSES = [
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
  ];

  const pitchToMIDI = (octave, pitch) => 12 * octave + pitch;

  const octave = parseInt(note.slice(-1), 10) + 1;
  const pitch = PITCH_CLASSES.indexOf(note.slice(0, note.length - 1));

  return pitchToMIDI(octave, pitch);
};

function toMap(obj) {
  return new Map(Object.entries(obj));
}

function nameToUrl({
  soundfont = 'FluidR3_GM',
  instrument = 'acoustic_grand_piano',
  format = 'mp3',
}) {
  const baseURL = 'https://gleitz.github.io';
  return `${baseURL}/midi-js-soundfonts/${soundfont}/${instrument}-${format}.js`;
}

function midiJsToJson(data) {
  let begin = data.indexOf('MIDI.Soundfont.');
  // if (begin < 0) throw Error('Invalid MIDI.js Soundfont format')
  begin = data.indexOf('=', begin) + 2;
  const end = data.lastIndexOf(',');

  return JSON.parse(`${data.slice(begin, end)}}`);
}

function fetchSoundfont(options) {
  return (
    httpFetch(nameToUrl(options))
      // .then((result) => result.text())
      .then((text) => midiJsToJson(text))
  );
}

function soundfontToArrayBuffer(soundfont) {
  const buffers = new Map();

  soundfont.forEach((value, key) => {
    const base64 = value.split(',')[1];
    buffers.set(noteToMIDI(key), decodeBase64(base64));
  });

  return buffers;
}

const memoizedSoundfont = memoizeWithStorage(
  ({ key: instrument, storeName: soundfont }) =>
    fetchSoundfont({ instrument, soundfont }).then((data) =>
      soundfontToArrayBuffer(toMap(data))
    )
);

onmessage = function (e) {
  const { instrument, soundfont } = e.data;

  memoizedSoundfont({ storeName: soundfont, key: instrument }).then(
    (buffers) => {
      postMessage(buffers);
    }
  );
};
