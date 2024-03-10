import { React } from "react";
import '../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardPage = ({ title, description1, image, description2, number }) => {
  return (
    <Card sx={{width: "100%"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {number}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description2}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detail</Button>
      </CardActions>
    </Card>
  )
}

export default CardPage;
