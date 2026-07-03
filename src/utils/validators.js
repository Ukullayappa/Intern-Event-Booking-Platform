export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value) {
  return /^[0-9+\-\s()]{7,15}$/.test(value.trim());
}

export function isPositiveInt(value) {
  return Number.isInteger(Number(value)) && Number(value) > 0;
}
