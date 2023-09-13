import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { Trailer } from "../entities/Trailer";
const useTrailers = (gameId: number) => {
  const axiosinstance = new APIclient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: axiosinstance.getAll,
  });
};
export default useTrailers;
