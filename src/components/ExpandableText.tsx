import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limite = 300;
  if (!children) return null;
  if (children.length <= limite) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, limite) + "... ";
  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : " Read More "}
      </Button>
    </Text>
  );
};

export default ExpandableText;
