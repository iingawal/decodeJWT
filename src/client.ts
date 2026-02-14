// Lightweight JWT payload decoder (browser-only, avoids external dependency)
function decodeJwt(token: string): any {
  const parts = token.split('.');
  if (parts.length < 2) throw new Error('Invalid JWT format');

  let payload = parts[1];
  payload = payload.replace(/-/g, '+').replace(/_/g, '/');
  const pad = payload.length % 4;
  if (pad === 2) payload += '==';
  else if (pad === 3) payload += '=';
  else if (pad === 1) throw new Error('Invalid base64 string');

  const decodedStr = decodeURIComponent(Array.prototype.map.call(atob(payload), (c: string) => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(decodedStr);
}

document.addEventListener('DOMContentLoaded', () => {
  const tokenInput = document.getElementById('tokenInput') as HTMLInputElement | null;
  const submitButton = document.getElementById('submitButton') as HTMLButtonElement | null;
  const outputArea = document.getElementById('outputArea') as HTMLElement | null;

  submitButton?.addEventListener('click', () => {
    const token1 = tokenInput?.value ?? '';
    if (token1) {
      try {
        const decoded = decodeJwt(token1 as string);
        console.log('Decoded JWT:', decoded);
        if (outputArea) outputArea.textContent = typeof decoded === 'string' ? decoded : JSON.stringify(decoded, null, 2);
      } catch (err: any) {
        console.error('Failed to decode token:', err);
        if (outputArea) outputArea.textContent = `Error decoding token: ${err?.message ?? err}`;
      }
    } else {
      if (outputArea) outputArea.textContent = 'No token entered';
    }
  });
});
