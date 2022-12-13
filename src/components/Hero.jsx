import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const Hero = () => (
  <Container
    disableGutters
    maxWidth="sm"
    component="main"
    sx={{ pt: 8, pb: 6 }}>
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="text.primary"
      gutterBottom>
      App Title
    </Typography>
    <Typography
      variant="h5"
      align="center"
      color="text.secondary"
      component="p">
      An App that does a Thing that's worth checking out because it is!
    </Typography>
  </Container>
);

export default Hero;
