import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { PageTitle } from "../../components";
import { ChartOne, ChartThree, ChartTwo, MapOne, TableOne } from "./components";

/**
 * @component Dashboard
 */
const Dashboard = () => {
  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <Grid container spacing={2}>
        {/* ######## Chart One ####### */}
        <Grid lg={4} md={6} xs={12}>
          <ChartOne />
        </Grid>

        {/* ######## Chart Two ####### */}
        <Grid lg={4} md={6} xs={12}>
          <ChartTwo />
        </Grid>

        {/* ######## Table One ####### */}
        <Grid lg={4} md={6} xs={12}>
          <TableOne />
        </Grid>

        {/* ######## Chart Three ####### */}
        <Grid md={6} xs={12}>
          <ChartThree />
        </Grid>

        {/* ######## Map One ####### */}
        <Grid md={6} xs={12}>
          <MapOne />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
