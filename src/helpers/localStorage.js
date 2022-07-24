export function setLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function getLocalStorage(key) {
  const result = localStorage.getItem(key);
  return JSON.parse(result);
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}
