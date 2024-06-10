export default async function Wait(time = 1000, success = true, message) {
  const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
      if (success) {
        res(message ? message : "Data fetched successfully");
      } else {
        rej(message ? message : "Failed to fetch Data ");
      }
    }, time);
  });
  const response = await myPromise;
  return response;
}
