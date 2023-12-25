import { Box } from '@mui/material';
import { AddCountry } from './Inputs/addCountry';
import { AddRegion } from './Inputs/addRegion';
import { setFilterDataProps } from '../../type';



export const FindBar = ({ setFilterData, data }: setFilterDataProps) => {
  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
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
