import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <div>
      <Box
        className="Box"
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
          backgroundColor: "rgba(0, 0, 0, 0.362)",
          mt: "380px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                color="white"
                gutterBottom
                style={{ marginRight: "30px" }}
              >
                About Us
              </Typography>
              <Typography
                variant="body2"
                color="white"
                style={{ marginRight: "30px" }}
              >
                We are a company NETFLIX committed to providing the best service
                for our clients.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                color="white"
                gutterBottom
                style={{ marginLeft: "100px" }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body2"
                color="white"
                style={{ marginLeft: "100px" }}
              >
                Tabyshalieva 29 Bishkek
              </Typography>
              <Typography
                variant="body2"
                color="white"
                style={{ marginLeft: "100px" }}
              >
                Email: netflix.com
              </Typography>
              <Typography
                variant="body2"
                color="white"
                style={{ marginLeft: "100px" }}
              >
                Phone: +996 777 888 999
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                color="white"
                gutterBottom
                style={{ marginLeft: "120px" }}
              >
                Follow Us
              </Typography>
              <Link
                href="https://www.facebook.com/netflix/?locale=ru_RU"
                color="inherit"
                style={{ marginLeft: "120px" }}
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/netflix/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link
                href="https://twitter.com/netflix?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                color="inherit"
              >
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="white" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://help.netflix.com/ru/">
                Netflix
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
