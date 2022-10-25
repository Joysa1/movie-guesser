import {memo} from "react";
import {TextField, TextFieldProps} from "@mui/material";
import MuiAutocomplete  from '@mui/material/Autocomplete';

interface AutcompleteProps {
    options: { label: string; id: string | number }[];
    label: string;
}

function Autcomplete(props: AutcompleteProps) {
    return <MuiAutocomplete
        disablePortal
        id="combo-box-demo"
        options={props.options}
        sx={{width: 300}}
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
    />
}

export default memo(Autcomplete)
