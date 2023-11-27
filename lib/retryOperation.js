/* eslint-disable consistent-return */
const retryOperation = async (operation, maxRetries, retryDelay) => {
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const result = await operation();

      if (result.error || result.error?.status === 500) {
        retryCount += 1;
        // eslint-disable-next-line no-await-in-loop
        await new Promise((resolve) => {
          setTimeout(resolve, retryDelay);
        });
        // eslint-disable-next-line no-continue
        continue;
      }

      return result;
    } catch (err) {
      retryCount += 1;

      if (retryCount === maxRetries) {
        throw err;
      }

      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => {
        setTimeout(resolve, retryDelay);
      });
    }
  }
};

export default retryOperation;
