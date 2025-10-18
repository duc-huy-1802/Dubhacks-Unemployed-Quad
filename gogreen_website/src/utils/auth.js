// Simple client-side 'verified' flag stored in localStorage.
const KEY = 'gogreen_verified_v1';

export function isVerified() {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch (e) {
    return false;
  }
}

export function setVerified() {
  try {
    localStorage.setItem(KEY, '1');
  } catch (e) {
    // ignore
  }
}

export function clearVerified() {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {}
}

export default { isVerified, setVerified, clearVerified };
