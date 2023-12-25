import { useEffect, useState } from 'react';
import { FindBar } from '../FindBar/FindBar';
import { Items } from '../Items/Items';
import { API_URL } from '../../api/api';

export const AllCountries = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const setApi = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${API_URL}/all`);
        const post = await response.json();
        setFilterData(post)
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
      {isLoading && <h4>Loading...</h4>}
      <Items filterData={filterData} />
    </>
  );
};
