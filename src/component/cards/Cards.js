import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@mui/material";

export default function Cards() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h3" sx={{ fontSize: 18 }} align={"center"}>
          BOT NAME #2
        </Typography>
        <CardActions>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4}>
              <Typography size="small">
                Ban Status:<b style={{ color: "#35C21C" }}>Not Ban</b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography size="small">
                Quests Point:<b>75</b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography size="small">
                Membership:<b>10</b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography size="small">
                Gold:<b>1,000,000</b>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography size="small">
                Last Check-In:<b>08:30:00</b>
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </CardContent>
      <CardActions>
        <Button size="small">Card Data</Button>
      </CardActions>
    </Card>
  );
}
