import { Box, Grid, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import { strCapital, strPopulation, strRegion } from '../../string';
import { dataType } from '../../type';

type itemsType = {
  filterData: dataType[]
};

export const Items = ({ filterData }: itemsType) => {
  return (
    <Box
      component='main'
      width='100%'
      maxWidth='1400px'
      margin='0 auto'
      px='2rem'
    >
      <Grid container spacing={9} >
        {filterData.map((item, key: number) => {
          const { flags, name, population, region, capital } = item;

          return (
            <Grid item md={3} xs={12} key={key}>
              <Button
                href={`/country/${name.common}`}
                sx={{ p: 0, textAlign: 'left', width: '100%' }}
              >
                <Card
                  sx={{ bgcolor: 'background.boxColor' }}
                >
                  <CardActionArea
                    sx={{
                      '& > a': {
                        color: 'text.primary',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    <CardMedia
                      component='img'
                      height='200'
                      image={flags.svg}
                      alt={name.common}
                    />
                    <CardContent sx={{ py: '1rem', width: '100%'}}>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h5'
                        sx={{
                          fontWeight: 800,
                        }}
                      >
                        {name.common}
                      </Typography>
                      <Stack
                        component='ul'
                        sx={{
                          margin: 0,
                          padding: 0,
                          '& > li': { listStyleType: 'none' },
                        }}
                      >
                        <Box component='li'>
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
                          <Typography
                            component='strong'
                            sx={{
                              fontWeight: 600,
                              textTransform: 'capitalize',
                            }}
                          >
                            {strCapital}:{' '}
                          </Typography>
                          <Typography component='span'>{capital}</Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
