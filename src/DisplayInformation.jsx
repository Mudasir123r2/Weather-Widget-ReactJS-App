import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./DisplayInformation.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function DisplayInformation({information}){
 
    let coldImg="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    let hotImg="https://media.istockphoto.com/id/1150229690/photo/silhouette-man-is-drinking-water-bottle-on-hot-weather-background-with-summer-season-high.jpg?s=612x612&w=0&k=20&c=IPPIY0enEDgl4nXt6ePap791LjXn0dd4kAinLfiGKKg=";

    let rainImg="https://media.istockphoto.com/id/613216216/photo/highway-driver-pov-through-raindrop-car-windshield-during-rain-storm.jpg?s=612x612&w=0&k=20&c=lvGxcXuvn_3T4RovgzsGkDMXdpoywbTwOLtRbWrcLJo=";

    let normalHotImg="https://media.istockphoto.com/id/2154696641/photo/panoramic-view-of-the-river-thames-with-blue-sky-and-the-sun-with-its-rays-coming-out-from.jpg?s=612x612&w=0&k=20&c=NaSJQUGCUJEwY9c4Sy8lJgZm4Y1Meipolo_84zK4BY8=";

    return (
        <div className='Display-Container'>
        <div className="infoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          information.humidity > 80 ? rainImg 
          : information.temperature > 30 ? hotImg
          : coldImg 
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {information.city} &nbsp;
         {
          information.humidity > 80 ? <ThunderstormIcon />
          : information.temperature > 30 ? <WbSunnyIcon />
          : <AcUnitIcon /> 
         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <h4>Temperature : {information.temperature}&deg;C</h4>
            <h4>Himidity : {information.humidity}</h4>
            <h4>Min Temperature: {information.minTemperature}&deg;C</h4>
            <h4>Max Temperature: {information.maxTemperature}&deg;C</h4>
            <h4>
            The weather can be depicted as <i>{information.weather}</i> and feels like {information.feelsLike}&deg;C
            </h4>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )

}