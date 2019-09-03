import soundfonts from '../../_data/soundfonts';

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

export default function(callback) {
  const returnFn = ({ storeName, key }) =>
    storage
      .then((db) => getFromStorage(db, storeName, key))
      .then((data) => {
        if (data) return data;

        return callback({ storeName, key })
          .then((result) => storage.then((db) => addToStorage(db, storeName, key, result)))
          .then(() => returnFn({ storeName, key }));
      });

  return returnFn;
}
