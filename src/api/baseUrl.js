export default function getBaseUrl() {
  const inDevelopment=window.location.hostname==='localhost';
  return inDevelopment?'https://localhost:3001/' :'/';

}
