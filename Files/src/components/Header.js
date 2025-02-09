import React from "react";
import { HStack, Link, Box, useBreakpointValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  // faMedium,
  // faStackOverflow,
  // faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const socials = [
  { icon: faGithub, link: "https://github.com/praveena-kollipara" },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/naga-praveena-kollipara",
  },
  // { icon: faTwitter, link: "https://x.com/PraveenaKo29294" },
  // { icon: faMedium, link: "https://medium.com/@praveenakollipara101" },
  // {
  //   icon: faStackOverflow,
  //   link: "https://stackoverflow.com/users/29563017/praveena-kollipara",
  // },
];

const Header = () => {
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const spacing = useBreakpointValue({ base: 4, md: 8 });

  return (
    <Box
      bg="black"
      color="white"
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow="md"
    >
      <HStack spacing={spacing} p={4}>
        {/* Social Media Links */}
        <HStack spacing={spacing}>
          {socials.map((social) => (
            <Link
              key={social.link}
              href={social.link}
              isExternal
              aria-label={social.icon.iconName}
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </Link>
          ))}
        </HStack>

        {/* Internal Links */}
        <HStack spacing={spacing} justifyContent="flex-end" width="100%">
          <Link as="a" onClick={() => handleClick("projects-section")}>
            Projects
          </Link>
          {/* <Link as="a" onClick={() => handleClick("contactme-section")}>
            Contact Me
          </Link> */}
          <Link as="a" onClick={() => handleClick("aboutme-section")}>
            About Me
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
