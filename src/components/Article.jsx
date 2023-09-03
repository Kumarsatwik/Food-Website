import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Card from "./Card";
import { useState } from "react";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import img5 from "../assets/image5.png";
import img6 from "../assets/image6.png";
import CaroselCard from "./CaroselCard";
const Article = ({ breakValue }) => {
  const [page, setPage] = useState(1);
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);

  const cards = 3;

  const cardList = [
    { id: 1, name: "Grilled Tomatoes at Home", photo: img1 },
    { id: 2, name: "Snacks for Travel", photo: img2 },
    { id: 3, name: "Post-workout Recipes", photo: img3 },
    { id: 4, name: "How To Grill Corn", photo: img4 },
    { id: 5, name: "Crunchwrap Supreme", photo: img5 },
    { id: 6, name: "Broccoli Cheese Soup", photo: img6 },
  ];

  const cardCount = Math.ceil(cardList.length / cards);

  const handleNextPage = () => {
    setPage((prev) => (prev < cardCount ? prev + 1 : prev));
    setLeft(false);
    setRight(true);
  };

  const handlePrevPage = () => {
    setPage((prev) => (prev < cardCount ? prev - 1 : prev));
    setLeft(true);
    setRight(false);
  };

  const startIndex = (page - 1) * cards;
  const displayCard = cardList.slice(startIndex, startIndex + cards);

  return (
    <>
      {breakValue ? (
        <>
          <Box textAlign="center" mt="158px">
            <Heading
              fontFamily="Source Sans Pro"
              fontWeight="600"
              fontSize="28px"
              lineHeight="54px"
              letterSpacing="0.04em"
              color="#0E2368"
            >
              Latest Articles
            </Heading>
            <CaroselCard breakValue={breakValue} />
          </Box>
        </>
      ) : (
        <>
          <Box
            position={"absolute"}
            top="1614px"
            left="108px"
            h="679px"
            w="1225px"
          >
            <Heading
              fontFamily="Source Sans Pro"
              fontWeight="600"
              fontSize="56px"
              lineHeight="42px"
              letterSpacing={4}
              color="#0E2368"
            >
              Latest Articles
            </Heading>
            <Flex alignItems="center" gap="20px" mt="5rem">
              {displayCard.map((data) => (
                <Card name={data.name} photo={data.photo} key={data.id} />
              ))}
            </Flex>
            <Flex justifyContent="center" mt="2rem">
              <ButtonGroup>
                <Button
                  isDisabled={left}
                  w="1rem"
                  h="2rem"
                  border="1px solid #AFAFAF"
                  borderRadius="5px"
                  bg="#FFFFFF"
                  onClick={handlePrevPage}
                >
                  ˂
                </Button>
                <span>{page}/2</span>
                <Button
                  isDisabled={right}
                  w="1rem"
                  h="2rem"
                  border="1px solid #AFAFAF"
                  borderRadius="5px"
                  bg="#FFFFFF"
                  onClick={handleNextPage}
                >
                  ˃
                </Button>
              </ButtonGroup>
            </Flex>
          </Box>
        </>
      )}
    </>
  );
};

export default Article;
