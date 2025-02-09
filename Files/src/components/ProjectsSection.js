import React from "react";
import { VStack, Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
const projects = [
  {
    title: "React-E-commerce",
    description: "React e-commerce app with cart",
    imageSrc: photo1,
    link: "https://github.com/praveena-kollipara/React_E-commerce",
  },
  {
    title: ".NET MVC Webapp",
    description:
      "A .NET MVC web application showcasing dynamic content rendering, database connectivity and responsive design.",
    imageSrc: photo2,
    link: "https://github.com/praveena-kollipara/WebApplication1-MVC-",
  },

  {
    title: "My_Portfolio",
    description:
      "Explore my projects, learn more about me, and connect through LinkedIn and GitHub to see my work and contributions.",
    imageSrc: photo3,
    link: "https://github.com/praveena-kollipara/My_Portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <Box id="projects-section" py={16} bg="green.700">
      {" "}
      <VStack spacing={8}>
        <Heading color="white">Featured Projects</Heading>
        <VStack spacing={6} align="stretch">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default ProjectsSection;
