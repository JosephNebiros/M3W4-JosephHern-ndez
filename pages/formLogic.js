export function validateUserData(name, age) {
    return name.trim() !== '' && age.trim() !== '' && parseInt(age) >= 0;
  }
  
  export function saveUserData(name, age) {
    localStorage.setItem('userData', JSON.stringify({ name, age }));
  }
  
  export function loadUserData() {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
  }
  
  export function clearUserData() {
    localStorage.removeItem('userData');
  }
  
  export function incrementSessionCounter() {
    let count = sessionStorage.getItem('interactionCount') || 0;
    count = parseInt(count) + 1;
    sessionStorage.setItem('interactionCount', count);
    return count;
  }
  