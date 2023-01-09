import { Header, Footer } from "../sections";
import { Flex } from "@chakra-ui/react";

export const LoginLayout = ({ children }: any) => {
  return <>{children}</>;
};

export const AppLayout = ({ children }: any) => {
  return (
    <Flex flexDir='column' overflow='auto' h='100vh' paddingBottom='82px'>
      {/* <Header /> */}
      {children}
      <Footer />
    </Flex>
  );
};
