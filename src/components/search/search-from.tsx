import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { SelectBox, SelectItem } from "./select-box";
import { GIPHY_QUERY } from '../../constants/giphy';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '../animation/loading';
import { SEARCH_GIF } from '../../api/search';
import { GifQuery, GifData } from '../../types';
import { useState } from 'react';

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

  const { control, register, handleSubmit } = useForm<GifQuery>();

  const { isLoading, error, data }: any = useQuery(
    ['gifs', gifQuery],
    () => SEARCH_GIF(gifQuery)
  );

  const onSubmit: SubmitHandler<GifQuery> = data => {
    setgifQuery({
      gifQueryString: data.gifQueryString,
      gifLimit: data.gifLimit,
      gifRating: data.gifRating,
      gifLang: data.gifLang
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('gifQueryString')} type="text" defaultValue="space cat" />

        <Controller
          name="gifLimit"
          control={control}
          render={({ field }) => (
            <SelectBox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              placeholder='Select a gif limit'
            >
              {GIPHY_QUERY.limit.map(item => (
                <SelectItem
                  key={item.id}
                  value={String(item.length)}
                >
                  {item.length}
                </SelectItem>
              ))}
            </SelectBox>
          )}
        />

        <Controller
          name="gifRating"
          control={control}
          render={({ field }) => (
            <SelectBox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              placeholder='Select a rating constraint'
            >
              {GIPHY_QUERY.rating.map(item => (
                <SelectItem
                  key={item.id}
                  value={String(item.age)}
                >
                  {item.age}
                </SelectItem>
              ))}
            </SelectBox>
          )}
        />

        <Controller
          name="gifLang"
          control={control}
          render={({ field }) => (
            <SelectBox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              placeholder='Select a language'
            >
              {GIPHY_QUERY.languages.map(item => (
                <SelectItem
                  key={item.id}
                  value={String(item.language)}
                >
                  {item.language}
                </SelectItem>
              ))}
            </SelectBox>
          )}
        />

        <input type="submit" />
      </form>

      {isLoading && <Loading />}
      {error && <>An error has occurred: {error.message} </>}
      {data && <> {
        data.data.map((gif: GifData) =>
          <div key={gif.id}>
            <img src={gif.images.original.url} width={gif.images.original.width} height={gif.images.original.width} alt={gif.title} />
          </div>
        )
      }
      </>}
    </>
  )
}