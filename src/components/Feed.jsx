import { Box, Stack } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Stack gap={5}>
        <Post
          username="Otabek Sobirjonovich"
          date="Semptember 14,2020"
          image="https://cdn.pixabay.com/photo/2023/11/14/15/46/nikon-8388022_1280.jpg"
          description="If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead."
        />
        <Post
          username="Azizbek Sobirjonovich"
          date="November 20,2022"
          image="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg"
          description="It is important to ensure that the contrast ratio between the color of the text and the background the text is placed over is high enough that people experiencing low vision conditions will be able to read the content of the page."
        />
        <Post
          username="Otabek Sobirjonovich"
          date="Semptember 14,2020"
          image="https://cdn.pixabay.com/photo/2023/11/14/15/46/nikon-8388022_1280.jpg"
          description="If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead."
        />
        <Post
          username="Azizbek Sobirjonovich"
          date="November 20,2022"
          image="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg"
          description="It is important to ensure that the contrast ratio between the color of the text and the background the text is placed over is high enough that people experiencing low vision conditions will be able to read the content of the page."
        />
      </Stack>
    </Box>
  );
};

export default Feed;
