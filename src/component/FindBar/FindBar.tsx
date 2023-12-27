import { Box } from '@mui/material';
import { AddCountry } from './Inputs/AddCountry';
import { AddRegion } from './Inputs/AddRegion';
import { dataType } from '../../type';

type findBarType = {
  setFilterData: React.Dispatch<React.SetStateAction<dataType[]>>;
  data: dataType[];
};


export const FindBar = ({ setFilterData, data }: findBarType) => {
  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        justifyContent:'space-between',
        flexDirection: { md: 'row', xs: 'column' },
        gap: { md: 0, xs: 5 },
        width: '100%',
        maxWidth: '1400px',
        margin: '3em auto',
        px: '2rem',
      }}
    >
      <AddCountry setFilterData={setFilterData} data={data} />
      <AddRegion setFilterData={setFilterData} data={data} />
    </Box>
  );
};
