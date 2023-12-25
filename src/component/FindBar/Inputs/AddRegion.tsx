import { useState } from 'react';
// import data from '../../../../data.json';
import { Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { filter_by } from '../../../string';
import MenuItem from '@mui/material/MenuItem';
import { setFilterDataProps } from '../../../type';
import { strAll } from '../../../string';

export const AddRegion = ({ setFilterData , data }: setFilterDataProps) => {
  const [selectRegion, setSelectRegion] = useState(strAll);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelectRegion(value);

    const filterValue =
      value == strAll ? data : data.filter((item) => item.region == value);

    setFilterData(filterValue);
  };

  const regionName = [strAll, ...new Set(data.map((item) => item.region))];

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '220px',
        bgcolor: 'background.boxColor',
        '& fieldset': { border: 'none' },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{filter_by}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          value={selectRegion}
          label={filter_by}
          onChange={handleChange}
          sx={{
            padding: '0 !important',
          }}
        >
          {regionName.map((item: string, key: number) => {
            return (
              <MenuItem
                sx={{
                  bgcolor: 'background.boxColor',
                }}
                value={item}
                key={key}
              >
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
