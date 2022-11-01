import { memo } from 'react';

import { CircularProgress, TextField } from '@mui/material';
import MuiAutocomplete from '@mui/material/Autocomplete';

import { AutocompleteOptionsModel } from '../shared/_models/autocomplete-options.model';

interface AutocompleteProps {
  options: AutocompleteOptionsModel[];
  label: string;
  isLoading: boolean;
  onChange: (event: any, newValue: AutocompleteOptionsModel | null) => void;
  onInputChange: (event: any, newInputValue: string | null) => void;
}

function Autocomplete(props: AutocompleteProps) {
  return (
    <MuiAutocomplete
      {...{
        disablePortal: true,
        ...props,
        sx: { width: 300 },
        includeInputInList: true,
        renderInput: (params) => (
          <TextField
            {...params}
            label={props.label}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {props.isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        ),
      }}
    />
  );
}

export default memo(Autocomplete);
