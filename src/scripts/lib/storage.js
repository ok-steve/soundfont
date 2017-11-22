import Observable from './Observable';
import { soundfonts } from '../../data.json';

const dbFactory = (name, version) => new Observable((observer) => {
  const request = indexedDB.open(name, version);

  request.onupgradeneeded = (e) => {
    observer.next(e);
    observer.complete();
  };

  request.onerror = (e) => {
    observer.error(e);
  };

  request.onsuccess = (e) => {
    observer.next(e);
    observer.complete();
  };
});

export const getFromStorage = (db, storeName, key) => new Observable((observer) => {
  const transaction = db.transaction([storeName], 'readonly');
  const store = transaction.objectStore(storeName);
  const request = store.get(key);

  request.onsuccess = (e) => {
    observer.next(e);
    observer.complete();
  };

  request.onerror = (e) => {
    observer.error(e);
  };
}).map(e => e.target.result);

export const addToStorage = (db, key, storeName, data) => new Observable((observer) => {
  const transaction = db.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);

  transaction.oncomplete = (e) => {
    observer.next(e);
    observer.complete();
  };

  transaction.onerror = (e) => {
    observer.error(e);
  };

  store.add(data, key);
});

const dbRequest = dbFactory('soundfont', 1);

const storage = dbRequest.map(e => e.target.result);

export default storage;

dbRequest.filter(e => e.type === 'upgradeneeded').map(e => e.target.result).subscribe((db) => {
  soundfonts.forEach((soundfont) => {
    db.createObjectStore(soundfont);
  });
});
