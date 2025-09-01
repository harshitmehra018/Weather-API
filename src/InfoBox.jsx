import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs=";

  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const Rain_URL =
    "https://images.unsplash.com/photo-1561915511-a461b5056526?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? Rain_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="haze weather"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            
          >
            {info.city}
            &nbsp;
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > <SunnyIcon /> ? (
              HOT_URL
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.temp_min}&deg;C</p>
            <p>Max Temp = {info.temp_max}&deg;C</p>
            <p>
              The weather can be described as {info.weather} and feels like{" "}
              {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
