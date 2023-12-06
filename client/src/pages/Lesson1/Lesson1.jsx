import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  Heading,
  Text,
  Stack,
  Container,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";

const Lesson1 = () => {
  // Add the content of the lesson here blah
  const dataTypes = {
    int: "An integer is a whole number, positive or negative, without decimals.",
    float: "A float represents real numbers and can contain fractional parts.",
    str: "A string is a sequence of characters, used to store text.",
    list: "A list is a collection which is ordered and changeable, allowing duplicate members.",
    dict: "A dictionary is a collection which is unordered, changeable and indexed. No duplicate members.",
  };

  const [description, setDescription] = useState("");

  const handleButtonClick = (dataType) => {
    setDescription(dataTypes[dataType]);
  };

  const questions = [
    {
      text: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      text: "What is the largest planet in our Solar System?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    setUserAnswers([...userAnswers, option]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <>
       <div style={{ zIndex: -2, backgroundColor: "#FAE6B4", paddingBottom: 50 }}>
        <Navbar />
        <Heading
          style={{ textAlign: "center", marginTop: 50, marginBottom: 5 }}
          size="3xl"
        >
          Lesson 1
        </Heading>
        <Heading style={{ textAlign: "center" }} color="#EF6360">
          Basic Data Types
        </Heading>
        <div>
          <Container maxW={"7xl"}>
            <Stack
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
              direction={{ base: "column", md: "row" }}
              height={"60vh"}
            >
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading lineHeight={1.1} fontWeight={700} fontSize="1xl">
                  <Text
                    as={"span"}
                    position={"relative"}
                    _after={{
                      content: "''",
                      width: "full",
                      height: "30%",
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      bg: "#EF6360",
                      zIndex: -1,
                    }}
                  >
                    Welcome.. add some text here idk if you want this
                  </Text>
                </Heading>
                <Text color={"black"}>
                  Add the content of the lesson here blah
                  blahdjabsdjbasdkjabsdkjb adskndalknsdalskndalksndalskndalkndan
                  sdknaldknsaknd
                  snadlksndalskndksandlaskdnalskdnaskndalsndaklsdnaskndak
                  skndalksdnl naksndalskn dalk ndas
                  ndalskndakndlaskndakndlsakndsalkn
                </Text>
                {/* <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={{ base: "column", sm: "row" }}
                >
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    colorScheme={"red"}
                    bg={"#EF6360"}
                    _hover={{ bg: "red.300" }}
                    onClick={() => {
                      navigate("/lessons");
                    }}
                  >
                    Get started
                  </Button>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                  >
                    How It Works
                  </Button>
                </Stack> */}
              </Stack>
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
              >
                "Add the image here"
                {/* <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              width={"full"}
              overflow={"hidden"}
            > */}
                {/* <div className="floating">
                  <SVGComponent />
                </div> */}
              </Flex>
            </Stack>
            <Box bg="#FFF7E6" p={6} w={550} borderRadius={10}>
              These are the definitions and explanations of basic data types!
              <br />
              Click on any of the buttons to read more about them!
              <br />
              Make sure to read all about them before moving on to the quiz!
            </Box>
            <Flex>
              <Stack
                spacing={10}
                w={"full"}
                direction="row"
                align="center"
                marginTop={20}
                marginBottom={20}
                justify={"center"}
              >
                {Object.keys(dataTypes).map((dataType) => (
                  <Button
                    key={dataType}
                    onClick={() => handleButtonClick(dataType)}
                    size={"lg"}
                    bg={
                      description === dataTypes[dataType]
                        ? "#EF6360"
                        : "#edf2f7"
                    }
                  >
                    {dataType}
                  </Button>
                ))}
              </Stack>
            </Flex>
            <Text style={{ textAlign: "center" }}>{description}</Text>
            {showScore ? (
              <div>
                <p>
                  Your score is {calculateScore()} out of {questions.length}
                </p>
              </div>
            ) : (
              <div>
                <Text>{questions[currentQuestion].text}</Text>
                <div>
                  <Stack
                    spacing={4}
                    w={"full"}
                    direction="row"
                    align="center"
                    marginTop={10}
                  >
                    {questions[currentQuestion].options.map((option) => (
                      <Button key={option} onClick={() => handleAnswer(option)}>
                        {option}
                      </Button>
                    ))}
                  </Stack>
                </div>
              </div>
            )}
          </Container>
        </div>
      </div>
    </>
  );
};

export default Lesson1;
