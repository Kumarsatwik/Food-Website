import Logo from "../assets/logo.jpg";
import Blob from "../assets/blob.png";
import HomeImage from "../assets/homeImage.png";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const Home = ({ breakValue }) => {
  return (
    <>
      {breakValue ? (
        <Flex w={{ base: "100%" }} h="50.5rem" flexDirection="column">
          <Box h="413.72px" borderBottomLeftRadius="100px" bgImage={HomeImage}>
            <Image h="435px" src={Blob} />
            <Button
              position="relative"
              bottom="416px"
              left="264px"
              fontFamily="Source Sans Pro"
              fontWeight="700"
              fontSize="11px"
              letterSpacing="0.01em"
              lineHeight="46px"
              color="#ffffff"
              colorScheme="#E23744"
              border="1px solid #FFFFFF"
              borderRadius="21px"
              className="homeButton"
              zIndex="1"
            >
              Contact Us
            </Button>
          </Box>
          <Flex textAlign="center" flexDirection="column" p="4.19rem">
            <Heading
              fontFamily="Source Sans Pro"
              fontSize="2.375em"
              fontWeight="700"
              color="#0e2368"
            >
              Discover the <span style={{ color: "#E23744" }}>Best</span> Food
              and Drinks
            </Heading>
            <Text
              fontFamily="Open sans"
              fontWeight="400"
              fontSize="11px"
              color="#444957"
              lineHeight="18px"
              mt="1.31rem"
            >
              Naturally made Healthcare Products for the better care & support
              of your body.
            </Text>
            <Button
              alignSelf="center"
              fontFamily="Open Sans"
              colorScheme="red"
              borderRadius="30px"
              fontWeight="700"
              fontSize="12px"
              letterSpacing="0.01em"
              lineHeight="32px"
              color="#ffffff"
              p="1rem"
              w="7.5rem"
              mt="1.75rem"
            >
              Explore Now!
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Grid templateColumns="repeat(2, 1fr)">
          <Box rowSpan={1} colSpan={1}>
            <Flex flexDirection="column">
              <Box>
                <Image src={Logo} mt="33px" ml="100px" />
              </Box>
              <Box w={345} h={207} position={"relative"} top={100} left={100}>
                <Heading
                  color="#0e2368"
                  fontFamily="Source Sans Pro"
                  fontSize="62px"
                  fontWeight="700"
                >
                  Discover the <span style={{ color: "#e23744" }}> Best </span>
                  Food and Drinks
                </Heading>
                <Text
                  fontFamily="Open sans"
                  fontWeight="400"
                  fontSize="16.44px"
                  color="#444957"
                  lineHeight="27.41px"
                  mt="26px"
                >
                  Naturally made Healthcare Products for the better care &
                  support of your body.
                </Text>
                <Button
                  fontFamily="Open Sans"
                  colorScheme="red"
                  borderRadius="34px"
                  fontWeight="700"
                  fontSize="18px"
                  letterSpacing="1%"
                  lineHeight="36px"
                  color="#ffffff"
                  padding="24px 34px"
                  gap="7px"
                  mt="10"
                >
                  Explore Now!
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box rowSpan={1} colSpan={1}>
            <Box h="804px" w="735px" bgImage={HomeImage}>
              <Image h="839px" w="752px" left="688px" src={Blob} />
              <Button
                position="absolute"
                top="30px"
                left="1270px"
                border="1px solid #FFFFFF"
                background={0}
                color="#fff"
                borderRadius="21px"
              >
                Get in Touch
              </Button>
            </Box>
          </Box>
        </Grid>
      )}
    </>
  );
};

export default Home;
