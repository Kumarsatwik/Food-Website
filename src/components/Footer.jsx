import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import Logo from "../assets/logo.jpg";
import Fb from "../assets/fb.png";
import Insta from "../assets/insta.png";
import Twitter from "../assets/twitter.png";

const Footer = ({ breakValue }) => {
  return (
    <>
      {breakValue ? (
        <>
          <Flex
            flexDirection="column"
            padding="5rem"
            position="absolute"
            top="3200px"
            w="100%"
            h="362px"
            bgColor="#F8F8F8"
            mt="50px"
          >
            <Box margin="0 auto">
              <Image m="50px 0" src={Logo} />
            </Box>
            <Box>
              <Heading
                color="#0E2368"
                fontSize="18.84px"
                fontFamily="Source Sans Pro"
                fontWeight="600"
                lineHeight="27.22px"
                letterSpacing="3%"
              >
                Contact Us
              </Heading>
              <Text
                color="#646874"
                mt="10px"
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                w="275px"
              >
                Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                Market, XYZ-343434
              </Text>
              <Text
                color="#646874"
                mt="10px"
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                w="232px"
                h="23px"
              >
                example2020@gmail.com
              </Text>
              <Text
                w="91px"
                h="23px"
                color="#646874"
                mt="10px"
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
              >
                (904) 443-0343
              </Text>
            </Box>
            <Box>
              {" "}
              <Heading
                color="#0E2368"
                fontSize="18.84px"
                fontFamily="Source Sans Pro"
                fontWeight="600"
                lineHeight="27.22px"
                letterSpacing="3%"
                mt="50px"
              >
                More
              </Heading>
              <Text
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                color="#646874"
                mt="10px"
              >
                About Us
              </Text>
              <Text
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                color="#646874"
                mt="10px"
              >
                Products
              </Text>
              <Text
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                color="#646874"
                mt="10px"
              >
                Career
              </Text>
              <Text
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                color="#646874"
                mt="10px"
              >
                Contact Us
              </Text>
            </Box>
            <Box>
              <Flex flexDirection="column" alignItems="center" w="80%">
                <Text
                  mt="30px"
                  fontWeight="400"
                  fontSize="14.66px"
                  lineHeight="23.03px"
                  fontFamily="Source Sans Pro"
                  color="#646874"
                >
                  © 2022 Food Truck Example
                </Text>
                <Flex>
                  <Image mt="10px" src={Insta} />
                  <Image mt="10px" ml="30px" src={Twitter} />
                  <Image mt="10px" ml="30px" src={Fb} />
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </>
      ) : (
        <>
          <Grid
            templateColumns="repeat(4, 1fr)"
            padding="5rem "
            position="absolute"
            top="2451px"
            w="100%"
            h="362px"
            bgColor="#F8F8F8"
          >
            <GridItem>
              <Image src={Logo} />
            </GridItem>
            <GridItem>
              <Heading
                color="#0E2368"
                fontSize="18.84px"
                fontFamily="Source Sans Pro"
                fontWeight="600"
                lineHeight="27.22px"
                letterSpacing="3%"
              >
                Contact Us
              </Heading>
              <Text
                color="#646874"
                mt="10px"
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                w="217px"
              >
                Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                Market, XYZ-343434
              </Text>
              <Text
                color="#646874"
                mt="10px"
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                w="232px"
                h="23px"
              >
                example2020@gmail.com
              </Text>
              <Text
                w="91px"
                h="23px"
                color="#646874"
                mt="10px"
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
              >
                (904) 443-0343
              </Text>
            </GridItem>
            <GridItem>
              {" "}
              <Heading
                color="#0E2368"
                fontSize="18.84px"
                fontFamily="Source Sans Pro"
                fontWeight="600"
                lineHeight="27.22px"
                letterSpacing="3%"
              >
                More
              </Heading>
              <Text
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                color="#646874"
                mt="10px"
              >
                About Us
              </Text>
              <Text
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                color="#646874"
                mt="10px"
              >
                Products
              </Text>
              <Text
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                color="#646874"
                mt="10px"
              >
                Career
              </Text>
              <Text
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                color="#646874"
                mt="10px"
              >
                Contact Us
              </Text>
            </GridItem>
            <GridItem>
              <Flex flexDirection="column" alignItems="center" w="80%">
                <Heading
                  color="#0E2368"
                  fontSize="18.84px"
                  fontFamily="Source Sans Pro"
                  fontWeight="600"
                  lineHeight="27.22px"
                  letterSpacing="3%"
                >
                  Social Links
                </Heading>
                <Flex>
                  <Image mt="10px" src={Insta} />
                  <Image mt="10px" ml="30px" src={Twitter} />
                  <Image mt="10px" ml="30px" src={Fb} />
                </Flex>
              </Flex>
              <Text
                mt="100px"
                fontWeight="400"
                fontSize="14.66px"
                lineHeight="23.03px"
                fontFamily="Source Sans Pro"
                color="#646874"
              >
                © 2022 Food Truck Example
              </Text>
            </GridItem>
          </Grid>
        </>
      )}
    </>
  );
};

export default Footer;
