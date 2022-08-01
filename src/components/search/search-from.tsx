import { useForm, SubmitHandler } from 'react-hook-form';
import { SEARCH_GIF } from '../../api/search';
import { GifQuery } from '../../types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Loading } from '../animation/loading';

export const SearchFrom = () => {
  const gifQueryLazyInitialization = () => {
    return {
      gifQueryString: 'hi',
      gifLimit: 1,
      gifRating: 'r',
      gifLang: 'en'
    }
  };

  const [gifQuery, setgifQuery] = useState<GifQuery>(gifQueryLazyInitialization);

  const { register, handleSubmit } = useForm<GifQuery>();

  const { isLoading, error, data }: any = useQuery(
    ['gifs', gifQuery],
    () => SEARCH_GIF(gifQuery)
  );

  const onSubmit: SubmitHandler<GifQuery> = (searchInputData) =>
    setgifQuery({
      gifQueryString: searchInputData.gifQueryString,
      gifLimit: searchInputData.gifLimit,
      gifRating: searchInputData.gifRating,
      gifLang: searchInputData.gifLang
    });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('gifQueryString')} />
        <select {...register('gifLimit', { required: true })}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <select {...register('gifRating', { required: true })}>
          <option value="g">g</option>
          <option value="pg">2</option>
          <option value="pg-13">pg-13</option>
          <option value="r">r</option>
        </select>
        <select {...register('gifLang', { required: true })}>
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
        <input type="submit" />
      </form>

      {isLoading && <Loading />}
      {error && <>An error has occurred: {error.message} </>}
      {data && <> {
        data.data.map((gif: any) =>
          <div key={gif.id}>
            <img src={gif.images.original.url} width={gif.images.original.width} height={gif.images.original.width} />
          </div>
        )
      }
      </>}
    </>
  )
}