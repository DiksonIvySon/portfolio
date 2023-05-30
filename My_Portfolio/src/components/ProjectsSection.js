import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Build a Clone Website",
    description:
      "frontend developers are responsible for translating mockups and prototypes to webpages, so it's beneficial if my portfolio displays my 'design-to-code' skills. Building a clone website is a good way to do that.",
    getImageSrc: () => require("../images/clone.png"),
  },
  {
    title: "A CRUD web application",
    description:
      "Carrying out CRUD (Create-Read-Update-Delete) operations is a very common feature for most websites (like blogs, e-commerce, dashboards, and so on) so it's something you need to be accustomed to building as a front-end developer.",
    getImageSrc: () => require("../images/crudweb.png"),
  },
  {
    title: "An API-connected website",
    description:
      "A lot of large scale projects require some sort of communication with a backend server and displaying data fetched from that server. This requires the use of an Application Programming Interface (API) in most cases.",
    getImageSrc: () => require("../images/API.png"),
  },
  {
    title: " A 'perfect score' website",
    description:
      "A perfect score website is a website that scores 100% across all categories on the Chrome Lighthouse audit report. Building a website that meets all the required features shows my skill at following best practices and ensuring high quality projects.",
    getImageSrc: () => require("../images/perfect-score.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url=""
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;