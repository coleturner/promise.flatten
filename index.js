export default async function promiseSpread(promise) {
  try {
    return [await promise, null]
  } catch (e) {
    return [null, e];
  }
}
