const doze = ms => new Promise(r => setTimeout(() => r(), ms));

export { doze };