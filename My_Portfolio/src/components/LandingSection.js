import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hey there, I am Dikson!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="black"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src="https://media.licdn.com/dms/image/C4D03AQGPErQWDkyKww/profile-displayphoto-shrink_800_800/0/1622484382731?e=2147483647&v=beta&t=CJWdBU9Vgf9kjzqSJdzpm2Mb_wnxlbjmqRF86d7Wpvk" 
                size="2xl" name="Dikson" />
        <Heading as="h4" size="md" noOfLines={1}>{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="4xl" noOfLines={1}>{bio1}</Heading>
        <Heading as="h1" size="4xl" noOfLines={1}>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;