import { useEffect, useState } from 'react';
import { FindBar } from '../FindBar/FindBar';
import { Items } from '../Items/Items';
import { API_URL } from '../../api/api';
import { Typography } from '@mui/material';
import { dataType } from '../../type';

export const AllCountries = () => {
 

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | unknown>(null);
  const [data, setData] = useState<dataType[]>([]);
  const [filterData, setFilterData] = useState<dataType[]>([]);

  useEffect(() => {
    const setApi = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${API_URL}/all`);
        const post = await response.json();
        setFilterData(post);
        setData(post);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
        console.log(error ? error : '');
      }
    };

    setApi();
  }, []);

  return (
    <>
      <FindBar setFilterData={setFilterData} data={data} />
      {isLoading && (
        <Typography variant='h4' component='h4' sx={{ textAlign: 'center' }}>
          Loading...
        </Typography>
      )}
      {!isLoading && filterData.length === 0 && (
        <Typography
          variant='h3'
          component='h3'
          sx={{ color: 'text.error', fontWeight: 900, textAlign: 'center' }}
        >
          Country not found
        </Typography>
      )}
      <Items filterData={filterData} />
    </>
  );
};
