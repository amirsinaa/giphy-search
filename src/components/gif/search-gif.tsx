import {
  GIF_RESULTS_WRAPPER_TRANSITION,
  GIF_RESULTS_TRANSITION
} from '../../constants/animations';
import {
  GiphyResultWrapper,
  GifImageWrapper,
  GifImage,
  lazyLoadEffect
} from './styles';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { SelectBox } from '../ui-elements/select/select-box';
import { SubmitButton } from '../ui-elements/button';
import type { GifQuery, GifData } from '../../types';
import { GIPHY_QUERY } from '../../constants/giphy';
import { TextInput } from '../ui-elements/input';
import { useQuery } from '@tanstack/react-query';
import { SEARCH_GIF } from '../../api/search';
import { StyledSelectItem } from './styles';
import { Form } from '../ui-elements/form';
import { css } from '@emotion/css';
import { useState } from 'react';

export const SearchGif = () => {
  const gifQueryLazyInitialization = () => {
    return {
      gifQueryString: 'hi',
      gifLimit: 1,
      gifRating: 'r',
      gifLang: 'en'
    }
  };

  const [gifQuery, setgifQuery] = useState<GifQuery>(gifQueryLazyInitialization);

  const [imageLazyload, setImageLazyload] = useState(true);
  const [imageLazyLoadEffect, setImageLazyLoadEffect] = useState(true);

  const { control, register, handleSubmit } = useForm<GifQuery>();

  const { error, data }: any = useQuery(
    ['gifs', gifQuery],
    () => SEARCH_GIF(gifQuery)
  );

  const onSubmit: SubmitHandler<GifQuery> = data => {
    setImageLazyload(true);
    setImageLazyLoadEffect(true);
    setgifQuery({
      gifQueryString: data.gifQueryString,
      gifLimit: data.gifLimit,
      gifRating: data.gifRating,
      gifLang: data.gifLang
    })
  };

  const onImageLoad = () => {
    setImageLazyload(false);
    setTimeout(() => setImageLazyLoadEffect(false), 600);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput {...register('gifQueryString')} defaultValue="Cool Space Cat" />

        <Controller
          name="gifLimit"
          control={control}
          render={({ field }) => (
            <SelectBox
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              defaultValue="1"
              label="Limit"
            >
              {GIPHY_QUERY.limit.map(item => (
                <StyledSelectItem
                  key={item.id}
                  value={String(item.length)}
                >
                  {item.length}
                </StyledSelectItem>
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
              defaultValue="r"
              label="Age Rating"
            >
              {GIPHY_QUERY.rating.map(item => (
                <StyledSelectItem
                  key={item.id}
                  value={String(item.age)}
                >
                  {item.age}
                </StyledSelectItem>
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
              defaultValue="en"
              label="Language"
            >
              {GIPHY_QUERY.languages.map(item => (
                <StyledSelectItem
                  key={item.id}
                  value={String(item.language)}
                >
                  {item.language}
                </StyledSelectItem>
              ))}
            </SelectBox>
          )}
        />

        <SubmitButton />
      </Form>
      {error && <>An error has occurred: {error.message} </>}
      {data && <GiphyResultWrapper variants={GIF_RESULTS_WRAPPER_TRANSITION} initial="hide" animate="show"> {
        data.data.map((gif: GifData) =>
          <GifImageWrapper
            key={gif.id}
            variants={GIF_RESULTS_TRANSITION}
            className={
              imageLazyLoadEffect ? css({
                animation: lazyLoadEffect + ' 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
              }) : 'picture-loaded'
            }>
            <GifImage
              initial={{ opacity: 0 }}
              animate={{
                opacity: imageLazyload ? 0 : 1
              }}
              transition={{
                opacity: { delay: 0.5, duration: 0.4 }
              }}
              onLoad={onImageLoad}
              src={gif.images.original.url}
              width={gif.images.original.width}
              height={gif.images.original.height}
              alt={gif.title}
              loading="lazy"
            />
          </GifImageWrapper>
        )
      }
      </GiphyResultWrapper>}
    </>
  )
}