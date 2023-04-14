/* ny kode 13 april */
// storage.jsx
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}
export function remove(key) {
  localStorage.removeItem(key);
}

// slett denne hvis den ikke brukes
export function getUsername() {
  const profile = getItem(profile);
  if (profile) {
    return profile.name;
  }
  return null;
}

export function getItem(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}
/* kode ok */
/*
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}
export function remove(key) {
  localStorage.removeItem(key);
}
*/
