import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../container.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { fetchStart } from '../redux/action';

export default function FetchData() {
  const { data, isLoading, error } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStart())
  }, [dispatch])

  console.log(data);
  return (
    <div className='outer'>
      {isLoading && <CircularProgress />}
      {error && <p>{error}</p>}
      {!isLoading && !error && data && data.map((element) => {
        return (

          <div key={element.id} className="data">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Card sx={{ minWidth: 375 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" noWrap>
                      id:{element.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      title:{element.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      body:{element.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </div>

        )
      })
      }

    </div>
  )
}



