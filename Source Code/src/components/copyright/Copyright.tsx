import { Typography, Link } from "@mui/material";
import { COMPANY_NAME, COMPANY_WEB_ADDRESS } from "../../config/BaseInfo";

/**
 * @component Copyright
 * @param {any} props
 */
const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href={COMPANY_WEB_ADDRESS}>
        {COMPANY_NAME}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
