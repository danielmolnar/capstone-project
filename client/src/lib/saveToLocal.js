export default function saveToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
