import { useHttp } from '../useHttp';

const useShazamService = () => {
  const { request } = useHttp();
    const _api = 'https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=rj&api_key=75df4c0dd1c2d1c7cd0bbbc551f3d373&format=json';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
            'X-RapidAPI-Key': 'adc5082072msh0760dcdf7189792p184a37jsn7fbceb199f76'
        }
    };

  const getTracks = async () => {
    const res = await request(_api, options);
    return res
    }

  return { getTracks };
}

export default useShazamService;
