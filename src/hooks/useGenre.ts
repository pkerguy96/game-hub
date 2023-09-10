import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";

import genres from "../data/genres";
import { Genre } from "../entities/Genre";
const apiClient = new APIclient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });

/* const useGenres = () => ({ data: genres, isLoading: false, error: null }); */
export default useGenres;
