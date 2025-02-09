// LandingSection.js

import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Naga Praveena Kollipara!";
const bio1 = "Passionate Full-Stack Developer & Data Science Enthusiast";
const bio2 =
  "Building scalable solutions with .NET Core, Java, React, Azure & ML.";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center">
      {/* Avatar */}
      <Avatar
        size="2xl"
        src="https://i.pravatar.cc/150?img=5" // Example avatar image
        alt="Praveena's Avatar"
      />

      {/* Greeting */}
      <Heading as="h1" size="xl">
        {greeting}
      </Heading>

      {/* Bio */}
      <VStack spacing={2}>
        <Text fontSize="2xl" fontWeight="bold">
          {bio1}
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          {bio2}
        </Text>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
