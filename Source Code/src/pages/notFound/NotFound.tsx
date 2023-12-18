import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Hidden,
} from "@mui/material";
import notFoundImage from "../../assets/images/404.png";
import { useNavigate } from "react-router-dom";

/**
 * @component NotFound
 */
const NotFound = () => {
  let navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item sm={6} justifyContent="center" sx={{ px: 2 }}>
            <Typography variant="h1" textAlign="center">
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button
              onClick={backToHome}
              variant="contained"
              color="primary"
              sx={{ mt: 1 }}
            >
              Back Home
            </Button>
          </Grid>
          <Hidden smDown>
            <Grid item sm={6} justifyContent="center">
              <img
                src={notFoundImage}
                alt="Not Found Page"
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotFound;
