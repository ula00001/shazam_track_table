import { useCallback } from 'react';

export const useHttp = () => {

    const request = useCallback(async (url, options) => {

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      return data.toptracks.track;
    } catch (e) {
      console.log(e.message);
      throw e;
    }

  }, []);

  return { request };

}