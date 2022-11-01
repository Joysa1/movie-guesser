import { AutocompleteOptionsModel } from '../../shared/_models/autocomplete-options.model';
import { MovieModel } from './movie.model';

export class MovieMapper {
  public static mapMovieModelToAutocompleteOptions(model: MovieModel): AutocompleteOptionsModel {
    return {
      label: model.title,
      id: model.id,
    };
  }
}
