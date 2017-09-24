export const midimessage = (status, data0, data1 = 127) => {
  return {
    status,
    data: [data0, data1],
  };
};
