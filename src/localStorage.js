const localStorage = window.localStorage;

export function updateStorage(keyStr, value) {
  const strVal = JSON.stringify(value);
  localStorage.setItem(keyStr, strVal);
}

export function getStorage(keyStr) {
  const value = localStorage.getItem(keyStr);
  return JSON.parse(value);
}
