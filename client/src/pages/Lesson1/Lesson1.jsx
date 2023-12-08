import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Confetti from "react-dom-confetti";
import Kid_comp from "../../components/Kid_comp.png"; 
import Bubble from "../../components/Bubbles/Bubble"; // Import your Bubble component

import {
  Heading,
  Text,
  Stack,
  Container,
  Box,
  Button,
  Flex,
  Divider
} from "@chakra-ui/react";



const Lesson1 = () => {

  const generateRandomPosition = () => {
    const top = `${Math.random() * 100}vh`; // Random top position
    const left = `${Math.random() * 100}vw`; // Random left position
    return { top, left };
  };

  const renderBubbles = () => {
    const numberOfBubbles = 20; // Adjust the number of bubbles as needed
    const bubbles = [];

    for (let i = 0; i < numberOfBubbles; i++) {
      const { top, left } = generateRandomPosition();
      bubbles.push(<Bubble key={i} top={top} left={left} />);
    }

    return bubbles;
  };


  
  const dataTypes = {
    int: "An integer is a whole number, positive or negative, without decimals.",
    float: "A float represents real numbers and can contain fractional parts.",
    str: "A string is a sequence of characters, used to store text.",
    list: "A list is a collection which is ordered and changeable, allowing duplicate members.",
    dict: "A dictionary is a collection which is unordered, changeable and indexed. No duplicate members.",
  };

  const [description, setDescription] = useState("");
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleButtonClick = (dataType) => {
    setDescription(dataTypes[dataType]);
  };

  const questions = [
    {
      text: "Which of the following is an example of an 'int'?",
      options: ["x=5", "x=3.14", "y=True", "y='five'"],
      answer: "x=5",
    },
    {
      text: "Which of the following is NOT a data type in Python?",
      options: ["Int", "Float", "Char", "Str"],
      answer: "Char",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = (option) => {
    console.log("Option selected:", option);
    setUserAnswers([...userAnswers, option]);
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
  
      // Check if the user scored 100% and toggle confetti accordingly
      if (calculateScore() === questions.length && calculateScore() > 0) {
        console.log("Setting confetti active");
        setIsConfettiActive(true);
      }
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

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 10000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#EF6360", "#EDF2F7", "#68D391", "#4299E1"],
  };

  useEffect(() => {
    if (showScore) {
      setIsConfettiActive(true);
    }
  }, [showScore]);
  



  

  return (
    <>
    <div style={{ zIndex: -2, backgroundColor: "#FCFFFF", paddingBottom: 50 }}>
      <Navbar />
      

      <Heading style={{ textAlign: "center", marginTop: 50, marginBottom: 5 }} size="3xl">
        Lesson 1
      </Heading>
      <Heading style={{ textAlign: "center" }} color="#EF6360">
        Basic Data Types
      </Heading>

      <Divider mb={1} borderColor="EF6360" />

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
                  Welcome to Lesson 1 of PyKidz where we will learn about different data types!
                </Text>
              </Heading>
              <Text color={"black"}>
                What is a Data Type? Well, it’s a special category that tells the computer how to treat a piece of information. Think of it as having different kinds of toys in your toy box, some are dolls, some are cars, and others are legos. Just like how you would organize your toys, computers organize information into different types. We will start by explaining the most basic ones.
              </Text>
            </Stack>

            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <img
                src={Kid_comp}
                alt="Your Image Alt Text"
                className="bounce-animation"
                style={{ width: '60%', 
                        height: 'auto', 
                        marginTop: '60px' }}
              />
            </Flex>
          </Stack>

          <Box bg="#DCFBEA" p={6} w={550} borderRadius={10}>
            These are the definitions and explanations of basic data types!
            <br/>
            Click on any of the buttons to read more about them!
            <br />
            Make sure to read all about them before moving on to the quiz!
          </Box>
          
          {/* Centered container for buttons and description */}
          
          <Flex direction="column" align="center" justify="center" marginTop={20}>
            <Stack
              spacing={10}
              w={"full"}
              direction="row"
              align="center"
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

            <Text style={{ textAlign: "center", marginTop: 15 }}>{description}</Text>

            {/* Centered container for quiz questions and options */}
           
            <Box 
               flex={1}
               justify={"center"}
               align={"center"}
               position={"relative"}
               w={"full"}
               bg="#CADBF9"
               p={6}
               borderRadius={10}
               height={"80vh"}
               width={"100%"}
               margin="auto"  // Add this line to center the Box
            >
              <Button
                size={"xl"}
                w="200px"
                h="100px"
                fontSize={45}
                bg={"#EF6360"}
                color={"white"}
                onClick={() => {
                  // Add the logic to navigate to the quiz page
                  setQuizStarted(true); //indicate to start quiz once button clicked
                }}
              >
                Quiz
              </Button>
              
              {quizStarted ? (
  <div>
    {showScore ? (
      <div>
        <p>
          Your score is {calculateScore()} out of {questions.length}
        </p>
        {calculateScore() === questions.length && calculateScore() > 0 ? (
          <div>
            <Confetti active={isConfettiActive} config={confettiConfig} />
            <p>Congratulations! You got 100%!</p>
          </div>
        ) : (
          <p>Try again to see the confetti!</p>
        )}
      </div>
    ) : (

      <div>
        <Text style={{ marginTop: 25 }}>{questions[currentQuestion].text}</Text>
        <div>
          <Stack
            spacing={8}
            w={"full"}
            direction="row"
            align="center"
            justify="center"
            marginTop={10}
          >
            {questions[currentQuestion].options.map((option) => (
              <Button key={option} onClick={() => handleAnswer(option) }>
                {option}
              </Button>
            ))}
          </Stack>
        </div>
      </div>
    )}
  </div>
) : null}
              </Box>
            </Flex>
           {renderBubbles()}
          </Container>
        </div>
      
      </div>
    </>
  );
};

export default Lesson1;
