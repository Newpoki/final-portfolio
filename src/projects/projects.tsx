import { PageMainTitle } from "@/theme/components/page-main-title";
import { TransitionWrapper } from "@/theme/components/transition-wrapper";
import { Box, Slide } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { ProjectsCard } from "./projects-card";
import { PROJECTS_LIST } from "./projects-constants";

export const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Jason Savelli</title>
      </Helmet>

      <Box maxWidth={1200} width="100%" mx="auto">
        <PageMainTitle>Projects</PageMainTitle>

        <Box component="ul" sx={{ listStyle: "none" }} pl={0}>
          {PROJECTS_LIST.map((project, index) => {
            return (
              <TransitionWrapper component="li" key={project.websiteUrl}>
                <Slide in direction={index % 2 === 0 ? "left" : "right"} timeout={{ enter: 1200 }}>
                  {/* Intermediary component so that the slide animate this while we can have more transition on `<ProjectCard />` */}
                  <Box>
                    <ProjectsCard
                      {...project}
                      sx={{
                        mb: {
                          xs: 4,
                          lg: 10,
                        },
                      }}
                    />
                  </Box>
                </Slide>
              </TransitionWrapper>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
