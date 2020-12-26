// @ts-check
const eventApi = {
  getEventCount(text) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(text.length);
      }, 1000);
    });
  }
};
export default eventApi;
