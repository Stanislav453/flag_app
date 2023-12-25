import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, Typography, ButtonGroup } from '@mui/material';
import { FaArrowLeftLong } from 'react-icons/fa6';
import {
  native_name,
  strPopulation,
  strRegion,
  sub_region,
  strCapital,
  top_level_domain,
  strCurrencies,
  strLanguages,
  border_countries,
  strBack,
} from '../../string';
import { useParams } from 'react-router';
import { API_URL } from '../../api/api';

export const CountryDetail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fetchData, setFetchData] = useState([]);

  const { countryName } = useParams();

  const itemDetailFilter = fetchData.filter(
    (item) => item.name.common === countryName
  );

  useEffect(() => {
    const setApi = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/all`);
        const post = await response.json();
        setFetchData(post);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
        console.log(error ? error : '');
      }
    };

    setApi();
  }, []);

  return (
    <>
      {loading && !error && <h4>Loading....</h4>}
      {error && loading && <h4>{error}</h4>}
      {itemDetailFilter.map((item, key) => {
        const {
          flags,
          name,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
        } = item;
        return (
          <>
            <Box
              maxWidth='1400px'
              margin='0 auto'
              px='2rem'
              sx={{
                a: {
                  padding: '.5rem 1rem',
                  color: 'text.primary',
                  textDecoration: 'none',
                  bgcolor: 'background.boxColor',
                  boxShadow: '1px 1px 6px  #232323',
                },
              }}
            >
              <Button
                href='/'
                sx={{
                  my: '6rem',
                  a: {
                    padding: '.2rem 1rem',
                    color: 'text.primary',
                    textDecoration: 'none',
                  },
                }}
                startIcon={<FaArrowLeftLong />}
              >
                {strBack}
              </Button>

              <Stack
                component='section'
                direction='row'
                alignItems='center'
                gap={10}
              >
                <Box component='article' flex={1}>
                  <Box
                    component='img'
                    src={flags.svg}
                    alt={name.common}
                    sx={{ width: '100%', maxWidth: '550px' }}
                  />
                </Box>
                <Box component='article' flex={1}>
                  <Box component='div'>
                    <Typography component='h3' variant='h3'>
                      {name.common}
                    </Typography>
                    <Stack
                      component='div'
                      direction='row'
                      justifyContent={'space-between'}
                      sx={{
                        ul: { padding: 0 },
                        'ul li': { listStyleType: ' none' },
                      }}
                    >
                      {' '}
                      <Stack component='ul' spacing={1}>
                        <Box component='li'>
                          {' '}
                          <Typography
                            component='strong'
                            sx={{
                              fontWeight: 600,
                              textTransform: 'capitalize',
                            }}
                          >
                            {native_name}:{' '}
                          </Typography>
                          <Typography component='span'>
                            {name.official}
                          </Typography>
                        </Box>
                        <Box component='li'>
                          {' '}
                          <Typography
                            component='strong'
                            sx={{
                              fontWeight: 600,
                              textTransform: 'capitalize',
                            }}
                          >
                            {strPopulation}:{' '}
                          </Typography>
                          <Typography component='span'>{population}</Typography>
                        </Box>
                        <Box component='li'>
                          {' '}
                          <Typography
                            component='strong'
                            sx={{
                              fontWeight: 600,
                              textTransform: 'capitalize',
                            }}
                          >
                            {strRegion}:{' '}
                          </Typography>
                          <Typography component='span'>{region}</Typography>
                        </Box>
                        <Box component='li'>
                          {' '}
                          <Typography
                            component='strong'
                            sx={{
                              fontWeight: 600,
                              textTransform: 'capitalize',
                            }}
                          >
                            {sub_region}:{' '}
                          </Typography>
                          <Typography component='span'>{subregion}</Typography>
                        </Box>
                        <Box component='li'>
                          {''}
                          <Typography
                            component='strong'
                            sx={{
                              fontWeight: 600,
                              textTransform: 'capitalize',
                            }}
                          >
                            {strCapital}:{' '}
                          </Typography>
                          <Typography component='span'>{capital[0]}</Typography>
                        </Box>
                      </Stack>
                      <Stack component='ul' spacing={1}>
                        <Box component='li'>
                          <Typography
                            component='strong'
                            sx={{
                              fontWeight: 600,
                              textTransform: 'capitalize',
                            }}
                          >
                            {top_level_domain}:{' '}
                          </Typography>
                          <Typography component='span'>{tld[0]}</Typography>
                        </Box>
                        <Box component='li'>
                          {' '}
                          <Typography
                            component='strong'
                            sx={{
                              fontWeight: 600,
                              textTransform: 'capitalize',
                            }}
                          >
                            {strCurrencies}:{' '}
                          </Typography>
                          <Box component='span'>
                            {Object.entries(currencies).map(([key, value]) => {
                              return (
                                <Typography key={key} component='span'>
                                  {value.symbol}
                                </Typography>
                              );
                            })}
                          </Box>
                        </Box>
                        <Box component='li'>
                          {' '}
                          <Typography
                            component='strong'
                            sx={{
                              fontWeight: 600,
                              textTransform: 'capitalize',
                            }}
                          >
                            {strLanguages}:{' '}
                          </Typography>
                          <Box component='span'>
                            {Object.entries(languages).map(
                              ([key, value]) => `${value} `
                            )}
                          </Box>
                        </Box>
                      </Stack>
                    </Stack>
                  </Box>
                  {item.borders && (
                    <Box component='article' mt={5}>
                      {' '}
                      <Typography
                        component='strong'
                        sx={{
                          fontWeight: 600,
                          textTransform: 'capitalize',
                        }}
                      >
                        {border_countries}:{' '}
                      </Typography>
                      <ButtonGroup
                        variant='outlined'
                        sx={{ pl: 2 }}
                        aria-label='button group'
                      >
                        {item.borders.map((bordersItem: string, key: number) => {
                          const bordersCountryName = fetchData.filter(
                            (item) => item.cca3 === bordersItem
                          );
                          return (
                            <Button
                              href={`/country/${bordersCountryName[0].name.common}`}
                              variant='outlined'
                              key={key}
                              sx={{ bgcolor: 'background.boxColor', mr: 2 }}
                            >
                              {bordersCountryName[0].name.common}
                            </Button>
                          );
                        })}
                      </ButtonGroup>
                    </Box>
                  )}
                </Box>
              </Stack>
            </Box>
          </>
        );
      })}
    </>
  );
};
