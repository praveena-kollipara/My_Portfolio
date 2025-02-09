import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
    >
      {/* Image */}
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="200px" />

      {/* Content Section */}
      <VStack spacing={4} align="start" p={4}>
        {/* Title */}
        <Heading as="h3" size="md">
          {title}
        </Heading>

        {/* Description */}
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>

        {/* Right Arrow Link */}
        <Link href={link} isExternal>
          <HStack color="blue.500" cursor="pointer">
            <Text fontWeight="bold">Learn More</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Link>
      </VStack>
    </Box>
  );
};

export default Card;
