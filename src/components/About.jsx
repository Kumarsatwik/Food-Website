import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import AboutUs from "../assets/aboutus.png";

const About = ({ breakValue }) => {
  return (
    <>
      {breakValue ? (
        <Box
          className="aboutUsContainer"
          p="3.125rem"
          textAlign="center"
          alignItems="center"
        >
          <Heading
            fontFamily="Poppins"
            fontWeight="600"
            fontSize="26px"
            color="#0e2368"
          >
            About Us
          </Heading>
          <Text
            fontFamily="Opens Sans"
            fontWeight="400"
            fontSize="11px"
            lineHeight="21px"
            color="#444957"
            mt="1.7rem"
            className="aboutUsText"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <Button
            p="1rem"
            mt="1.7rem"
            fontFamily="Source Sans Pro"
            fontWeight="600"
            fontSize="11px"
            lineHeight="46px"
            letterSpacing="0.03em"
            color="#ffffff"
            colorScheme="red"
            borderRadius="21px"
            className="aboutUsBtn"
          >
            Read More
          </Button>
        </Box>
      ) : (
        <Box h="653px" paddingTop="186px">
          <Flex
            h="467px"
            alignItems={"center"}
            justifyContent={"space-evenly"}
            bgColor="#f6f6f9"
          >
            <Image h="468px" w="384px" src={AboutUs} />
            <Box w="447px" h="254px">
              <Heading
                fontFamily="Poppins"
                fontWeight="600"
                fontSize="45px"
                color="#0e2368"
              >
                About Us
              </Heading>
              <Text
                lineHeight="27px"
                fontSize="15px"
                fontWeight="400"
                fontFamily="Open Sans"
                color="#444957"
                mt="20px"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. t has
                survived not only five centuries.
              </Text>
              <Button
                w="80px"
                h="36px"
                fontFamily="Source Sans Pro"
                fontWeight="600"
                fontSize="16px"
                lineHeight="36px"
                letterSpacing="0.03em"
                color="#ffffff"
                bgColor="#E23744"
                borderRadius="21px"
                p="20px 65px"
                mt="20px"
              >
                Read More
              </Button>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default About;
