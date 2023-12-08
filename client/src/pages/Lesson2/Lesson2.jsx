import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Confetti from "react-dom-confetti";
import lesson2pic from "../../components/lesson2pic.png"; 
import Bubble from "../../components/Bubbles/Bubble"; // Import your Bubble component

import {
  Heading,
  Text,
  Stack,
  Container,
  Box,
  Button,
  Flex,
  Divider,
  extendTheme,
} from "@chakra-ui/react";



const Lesson2 = () => {

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
    '%': "Modulus or Mod helps us find the leftover or remainder when dividing two numbers and will return an 'Int'. For example, if you have 10 cookies and you want to share the with 3 friends, Mod will give you the number of cookies leftover once everyone gets their equal share, aka 1 cookie. The syntax would be: 10 % 3 (You can only mod 2 ints, not floats!)" ,
    '/': "Divison, this symbol helps us divide things equally and would return a 'Float' or an 'Int'. The syntax would be:  10/2",
    '**': "The double star symbol is to identify the exponent. An exponent returns a number after you ,multiply it by itself a certain amount of times. It will return an 'Int' or 'Float' depending on the numbers being used. Syntax: 2**3 returns 8 (2**2**2)  ",
    '*': "The single star symbol is equivalent to the muliplication symbol! The good news is, it works exactly the same way as normal muliplcation! Syntax: 2*3 returns: 6.",
  };

  const [description, setDescription] = useState("");
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleButtonClick = (dataType) => {
    setDescription(dataTypes[dataType]);
  };

  const questions = [
    {
      text: "What would be the answer to: 6*2'?",
      options: ["12", "3", "0", "36'"],
      answer: "12",
    },
    {
      text: "What would be the answer to: 17%5?",
      options: ["3", "85", "1", "2"],
      answer: "2",
    },
    {
      text: "What of the following shows incorrect syntax?",
      options: ["2*3", "3^2", "3%2", "3**2"],
      answer: "3^2"
    }
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
    angle: 270,
    spread: 400,
    startVelocity: 40,
    elementCount: 90,
    dragFriction: 0.12,
    duration: 15000,
    stagger: 10,
    width: "20px",
    height: "15px",
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
        Lesson 2
      </Heading>
      <Heading style={{ textAlign: "center" }} color="#EF6360">
        Math Symbols & Syntax
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
                  Welcome back! In this lesson we will be learning about Math & Syntax!
                </Text>
              </Heading>
              <Text color={"black"}>
                So after learning more about different data structures, we're going to learn about some of the math symbols in Python.
                You might be wondering, "Why is math different in coding than when I do it on paper?"
                Well, that's because of something we know as Syntax.
                SYntax is kind of like grammer, just like how there is a right and wrong way to write
                a sentence, there is also a right anad wrong way to code. We will get more into
                the syntax later on, for now, continue onto the below and learn about different math symbols!
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
                src={lesson2pic}
                alt="Your Image Alt Text"
                className="bounce-animation"
                style={{ width: '60%', 
                        height: 'auto', 
                        marginTop: '60px' }}
              />
            </Flex>
          </Stack>

          <Box bg="#DCFBEA" p={6} w={550} borderRadius={10}>
            These are the definitions and explanations of the different math symbols!
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
           
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="center"
                marginTop={10}
              >
                <Box
                  flex={1}
                  justify={"center"}
                  align={"center"}
                  position={"relative"}
                  w={{ base: "full", md: "50%" }}
                  bg="#FDD7F9"
                  p={6}
                  borderRadius={10}
                  height={{ base: "auto", md: "450" }}
                  width={"100%"}
                  margin={{ base: 0, md: "auto" }}
                  marginBottom={{ base: 5, md: 0 }}  /* Add marginBottom here */
                  marginRight={{ md: 2 }} 
                >
                  <Text fontSize="lg" fontFamily="monospace" textAlign={"left"} >
                    {/* NEW BOX 1 */}
                    {[
                      'Examples of Correct Syntax:',
                      ' ' ,
                      '',
                      'result = 15 % 4',
                      'print(result)  # Output: 3',
                      '##########################',
                      'result = 10 / 2',
                      'print(result)  # Output: 5.0',
                      '##########################',
                      'result = 2 ** 3',
                      'print(result)  # Output: 8',
                      '###########################',
                      'result = 5 * 4',
                      'print(result)  # Output: 20',
                    ].map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </Text>
                </Box>

                <Box
                  flex={1}
                  justify={"center"}
                  align={"center"}
                  position={"relative"}
                  w={{ base: "full", md: "50%" }}
                  bg="#FDD7F9"
                  p={6}
                  borderRadius={10}
                  height={{ base: "auto", md: "450" }}
                  width={"100%"}
                  margin={{ base: 0, md: "auto" }}
                  marginTop={{ base: 5, md: 0 }}
                  marginBottom={{ base: 5, md: 0 }}
                  marginLeft={{ md: 2 }}  
                  
                >
                  <Text fontSize="lg" fontFamily="monospace" textAlign="left">
                    {/* NEW BOX 2 */}
                    {[
                      'Examples of Wrong Syntax:',
                      'result = 10.5 % 3.2',
                      'print(result)  # Output: Error (Cannot mod 2 floats, only ints.)',
                      '',
                      '###################################',
                      '',
                      'result = 8 / 0',
                      'print(result)  # Output: Error (You can never divide by 0!)',
                      '',
                      '###################################',
                      '',
                      'result = 2 ^ 3',
                      'print(result)  # Output: Error (Although the ^ symbol is often used to represent exponents, in Python, we use ** instead)',
                      '',
                    ].map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </Text>
                </Box>
              </Flex>
           
            
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
               marginTop={{ base: 5, md: 10 }}  /* Add marginTop here */

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

export default Lesson2;
