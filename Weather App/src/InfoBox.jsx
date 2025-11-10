import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {
    const INIT_URL=
    "https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171";
    
    let info={

    };
    return(
        <div className="InfoBox">
            <h1>WeatherInfo</h1>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min_temp={info.tempmin}&deg;C</p>
          <p>Max_temp={info.tempmax}&deg;C</p>
          <p>The weather can be describe as <i>{info.weather}</i> and feels like{info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );
};