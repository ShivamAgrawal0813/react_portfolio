import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Vanilla Magical Music",
    description:
      "The SonsEnchantes (Enchanted Sounds) is an online platform designed to provide users with an immersive and tranquil experience through the power of sound. It aims to promote relaxation, mindfulness, and a sense of calmness by offering a curated collection of soothing soundscapes and meditation tools.",
    getImageSrc: () => require("../images/photo1.png"),
  },
  {
    title: "Vanilla Spotify Clone",
    description:
      "It's a clone of Spotify in which we can play music",
    getImageSrc: () => require("../images/photo2.png"),
  },
  {
    title: "Vanilla AI Image Generator",
    description:
      "It uses OpenAPi to generate images of given subject",
    getImageSrc: () => require("../images/photo3.png"),
  },
  {
    title: "HTML CSS KFC Landing Page",
    description:
      "It's the home page of KFC website.",
    getImageSrc: () => require("../images/photo4.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
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
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
