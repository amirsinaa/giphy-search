import api from "../api";
import { GifQuery } from '../../types';

export const SEARCH_GIF = async ({
  gifQueryString,
  gifLimit = 1,
  gifRating = 'r',
  gifLang = 'en' }: GifQuery
) => {
  const response = await api.get<GifQuery>('search', {
    params: {
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      q: gifQueryString,
      limit: gifLimit,
      rating: gifRating,
      lang: gifLang
    }
  });
  return response.data;
}