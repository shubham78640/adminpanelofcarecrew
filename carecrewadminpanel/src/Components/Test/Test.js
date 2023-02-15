import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Test(props) {

  const { cardimage,CardHeading ,cardcontentlines} =props;
  return (
    <>
     <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          width="50"
          image={cardimage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {CardHeading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {cardcontentlines}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </>
  )
}

export default Test