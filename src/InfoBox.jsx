import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/1175064600/video/4k-time-lapse-of-blue-sky-moving-cloudy-with-sharp-sun-rays-in-summer.jpg?s=640x640&k=20&c=6s2SKIbZEsCkYMKL3h98_Ej8Jfy7mncDG_Zo6HPgclo=";
  let COLD_URL =
    "https://www.shutterstock.com/shutterstock/videos/1108918061/thumb/10.jpg?ip=x480";
  let HOT_URL =
    "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=612x612&w=0&k=20&c=wp60t_1SUG9qDTxzAJwvfZYlLVAiu9r737F_nvtOSPA=";
  let RAIN_URL =
    "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?semt=ais_hybrid&w=740&q=80";
  return (
    <div className="InfoBox">
      <h1>WEATHER INFO</h1>
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div> Humidity:{info.humidity} </div>
              <div> Temprature::{info.temp} &deg;C </div>
              <div> TempMax:{info.tempMax} &deg;C</div>
              <div> TempMin:{info.tempMin} &deg;C</div>
              <div>
                {" "}
                The Weather can be describe as <i>{info.weather}</i> !!{" "}
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
