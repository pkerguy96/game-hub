import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  /* kat9olb typescritp b ! saying it will never be null the slug */
  const { data, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameAttributes data={data} />
      <GameTrailer gameId={data.id} />
    </>
  );
};

export default GameDetailPage;
