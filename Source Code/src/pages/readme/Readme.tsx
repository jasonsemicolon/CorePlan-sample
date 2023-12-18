import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import { PageTitle, Paper } from "../../components";
import { Typography } from "@mui/material";
import screen1 from "../../assets/images/screen1.png";
import screen2 from "../../assets/images/screen2.png";
import screen3 from "../../assets/images/screen3.png";
import "./readme.css";
const Readme = () => {
  return (
    <>
      <PageTitle>ReadMe</PageTitle>
      <Paper title="Screens" icon={<ScreenshotMonitorIcon />}>
        <Typography variant="h6" component="body" m={1} mb={5}>
          I have developed this app based on the following screens:
        </Typography>
        <img src={screen1} alt="screen one" className="screen_image" />
        <img src={screen2} alt="screen two" className="screen_image" />
        <img src={screen3} alt="screen three" className="screen_image" />
      </Paper>
    </>
  );
};

export default Readme;
