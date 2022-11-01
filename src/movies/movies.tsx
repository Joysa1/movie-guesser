import React, { memo, useCallback, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import Autocomplete from '../components/Autocomplete';
import { AutocompleteOptionsModel } from '../shared/_models/autocomplete-options.model';
import BaseResponseModel from '../shared/_models/base.response.model';
import { searchMovie } from './_api/movie/movie.api.service';
import { MovieModel } from './_models/movie.model';
import { MovieMapper } from './_models/movie-mapper';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');

  const query = useQuery<AxiosResponse<BaseResponseModel<MovieModel[]>>>(
    ['movies', searchQuery],
    async () => await searchMovie(searchQuery),
    {
      enabled: Boolean(searchQuery),
    },
  );

  const onChange = useCallback((event: any, newValue: AutocompleteOptionsModel | null) => {
    console.log(newValue);
  }, []);

  const onInputChange = useCallback((event: any, newValue: string | null) => {
    setSearchQuery(newValue!);
  }, []);

  return (
    <div>
      Movies
      <Autocomplete
        {...{
          label: 'Movies',
          isLoading: query.isLoading,
          options: query.isLoading ? [] : query.data!.data.results.map(MovieMapper.mapMovieModelToAutocompleteOptions),
          onChange,
          onInputChange,
        }}
      />
    </div>
  );
}

export default memo(Movies);
