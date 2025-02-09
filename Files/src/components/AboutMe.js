// AboutSection.js

import React from "react";
import { VStack, Box, Heading, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box id="aboutme-section" py={16} bg="blue.700">
      <VStack spacing={8}>
        <Heading color="white">About Me</Heading>
        <VStack spacing={6} align="stretch" maxW="800px" textAlign="center">
          <Text fontSize="lg" color="white">
            I'm a Full Stack Developer & Data Science Enthusiast with expertise
            in .NET Core, Java, React, Azure, and Machine Learning. I specialize
            in building scalable web applications, optimizing databases, and
            deploying intelligent data-driven solutions.
          </Text>
          <Text fontSize="lg" color="white">
            With experience in front-end and back-end development, REST APIs,
            cloud computing, and data analytics, I love tackling complex
            problems and creating solutions that enhance business efficiency.
          </Text>
          <Text fontSize="lg" color="white">
            I have worked on enterprise applications, cloud-based deployments,
            AI-driven data analysis, and full-stack web development. Whether
            it's designing robust APIs, optimizing SQL queries, or implementing
            machine learning models, I’m always excited to build, innovate, and
            learn.
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default AboutSection;
