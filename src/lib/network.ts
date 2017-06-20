export const makeRequest = (input: USVString | Request, init?): Promise<Response> => {
  return fetch(input, init).then((response: Response): Promise<Response> => {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return Promise.resolve(response);
  });
};
