import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useLogin } from "../../auth/Auth";
import { Copyright } from "../../components";
import { ROUTE_SEGMENTS } from "../../config/Routes";
import { STORAGE } from "../../config/Storage";
import { LoginType } from "../../models/Auth";

/**
 * Source : https://github.com/mui/material-ui/tree/v5.15.0/docs/data/material/getting-started/templates/sign-in
 * @component Login
 */
const Login = () => {
  // => get login info from storage
  let loginInfo = localStorage.getItem(STORAGE.LOGIN_INFO)
    ? JSON.parse(localStorage.getItem(STORAGE.LOGIN_INFO)!)
    : {
        userName: "",
        password: "",
      };

  //=> States
  const [formData, setFormData] = React.useState<LoginType>(loginInfo);
  const [remember, setRemember] = React.useState<boolean>(
    localStorage.getItem(STORAGE.REMEMBER) ? true : false
  );

  //=> Login request
  let [{ loading, message, error }, loginRequest] = useLogin(
    {
      ...formData,
    },
    remember
  );

  // => Handlers
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginRequest();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    let { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRemember: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    let { checked } = event.target;
    setRemember(checked);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <br />

        <Stack direction="row">
          <b>username</b> : user1 , <b>password</b>: password1
        </Stack>
        <Stack direction="row">
          <b>username</b> : user2 , <b>password</b>: password2
        </Stack>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            value={formData?.userName}
            onChange={handleChange}
            size="small"
            error={error}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            size="small"
            error={error}
            value={formData?.password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                checked={remember}
                onChange={handleRemember}
              />
            }
            label="Remember me"
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={loading}
          >
            Sign In
          </LoadingButton>

          <Typography color="error" component="span">
            {message}
          </Typography>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href={ROUTE_SEGMENTS.REGISTER} variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;
