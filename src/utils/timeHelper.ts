export function getDate() {
  return new Date().toDateString();
}

export function getLocalTime() {
  return new Date().toLocaleTimeString();
}

export function getFormattedTime() {
  return `${getDate()}, ${getLocalTime()}`;
}
