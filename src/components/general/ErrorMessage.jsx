import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
export const ErrorMessage = () => (
  <Alert severity="error">
    <Typography variant="h6">Something went wrong</Typography>
  </Alert>
);
