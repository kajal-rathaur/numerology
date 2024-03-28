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
    <Card
      sx={{
        width: "100%", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', transition: '0.5s',
        '&:hover': {
          transform: 'scale(1.1)', /* Increase size by 20% on hover */
          transition: "transform 0.4s ease"
        }
      }}

    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#171836' }}>
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
        <Button size="small" sx={{ color: "#a18b5c", fontWeight: 'bold' }}>Detail</Button>
      </CardActions>
    </Card>
  )
}

export default CardPage;
