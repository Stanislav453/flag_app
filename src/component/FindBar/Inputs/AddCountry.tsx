import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';
import { search } from '../../../string';
import InputAdornment from '@mui/material/InputAdornment';
import { FaSearch } from 'react-icons/fa';
import { dataType} from '../../../type';
type addCountryType = {
  setFilterData: React.Dispatch<React.SetStateAction<dataType[]>>;
  data: dataType[];
};

export const AddCountry = ({ setFilterData, data }: addCountryType) => {
  const filterByName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setFilterData(
      data.filter((item: dataType) => item.name.common.toLowerCase().startsWith(value))
    );
  };

  return (
    <TextField
      id='outlined-basic'
      placeholder={search}
      variant='outlined'
      onChange={filterByName}
      sx={{
        width: '100%',
        maxWidth: '600px',
        '& fieldset': { border: 'none' },
        bgcolor: 'background.boxColor',
        outline: 'none',
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment sx={{ px: 2 }} position='start'>
            <FaSearch />
          </InputAdornment>
        ),
      }}
    />
  );
};
