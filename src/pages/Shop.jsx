import { Grid } from "@mui/material";
import React from "react";

export function Shop() {
  return (
    <>
      {/* <img src="../assets/grey.jpg" alt="" /> */}
      <img src="" alt="" />
      <div>Hej Shop</div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* <Item
            img="../assets/grey.jpg"
            title="Title 1"
            description="Description for item 1"
          /> */}
        </Grid>
        {/* <Grid item xs={4}>
          <Item
            img="../assets/grey.jpg"
            title="Title 2"
            description="Description for item 2"
          />
        </Grid> */}
        {/* <Grid item xs={4}>
          <Item
            img="../assets/grey.jpg"
            title="Title 3"
            description="Description for item 3"
          />
        </Grid>
        <Grid item xs={8}>
          <Item
            img="https://example.com/image1.jpg"
            title="Title 4"
            description="Description for item 4"
          />
        </Grid> */}
      </Grid>
    </>
  );
}
