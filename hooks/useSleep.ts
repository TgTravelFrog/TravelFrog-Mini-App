function useSleep(defalut_delay: number = 1500): [(delay?: number) => Promise<any>] {
  const sleep = (delay?: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, delay ?? defalut_delay);
    });
  };
  return [sleep];
}

export default useSleep;
