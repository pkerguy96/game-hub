import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Heading textAlign={"center"} marginTop={5}>
        Oops
      </Heading>
      <Text textAlign={"center"}>
        {isRouteErrorResponse(error)
          ? "This page dosnt exist"
          : "an unexpected error occurred."}
      </Text>
    </>
  );
};

export default ErrorPage;
