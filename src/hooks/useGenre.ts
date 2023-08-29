import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";

import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
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
