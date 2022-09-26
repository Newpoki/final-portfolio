import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";

import TestImg from "./test-img.jpg";
import { forwardRef } from "react";
import { SystemStyleObject } from "@mui/system";

type Props = {
  title: string;
  description: string;
  websiteUrl: string;
  githubUrl: string;
  sx: SystemStyleObject;
};

export const ProjectsCard = forwardRef<HTMLLIElement, Props>(
  ({ title, description, websiteUrl, githubUrl, sx }) => {
    return (
      <Paper
        sx={(theme) => ({
          ...sx,
          transition: "0.3s box-shadow",
          boxShadow: theme.shadows[3],
          borderRadius: "24px",
          // Otherwise, the picture isn't croped properly
          overflow: "hidden",
          mx: 1,

          "&:hover": {
            boxShadow: theme.shadows[6],
          },
        })}
      >
        <Box
          display="flex"
          alignItems="center"
          height={524}
          flexDirection={{
            xs: "column-reverse",
            lg: "row",
          }}
        >
          <Stack width={{ xs: "100%", lg: "50%" }} p={{ xs: 3, lg: 6 }}>
            <Typography variant="h3" mb={4}>
              {title}
            </Typography>

            <Typography variant="body2" mb={4}>
              {description}
            </Typography>

            <Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 2 }}
                href={websiteUrl}
                target="_blank"
              >
                View project
              </Button>

              <Button
                startIcon={<GitHubIcon />}
                variant="outlined"
                color="inherit"
                href={githubUrl}
                target="_blank"
              >
                View source
              </Button>
            </Box>
          </Stack>

          <Stack width={{ xs: "100%", lg: "50%" }} height="100%">
            <div
              style={{
                backgroundImage: `url(${TestImg})`,
                height: "100%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </Stack>
        </Box>
      </Paper>
    );
  }
);