import { Flex } from "@chakra-ui/react";
import { UserQuiz, Navigation } from "../../components";

export const Home = (): any => {
  return (
    <Flex>
      <Navigation />
      <UserQuiz />
    </Flex>
  );
};
