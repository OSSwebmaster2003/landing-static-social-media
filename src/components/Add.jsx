import { Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React from "react";

const Add = () => {
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "calc(50% - 25px)",
            sm: 30,
          },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
