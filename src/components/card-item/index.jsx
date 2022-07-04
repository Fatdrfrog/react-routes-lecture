import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CardItem = ({ item }) => {
  return (
    <Box sx={{ minHeight: 340, margin: "1rem" }}>
      <Card variant="outlined">
        <>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.title}
            </Typography>

            <img
              src={item.thumbnail.path + "/portrait_xlarge.jpg"}
              alt={item.title}
            />
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </>
      </Card>
    </Box>
  );
};
