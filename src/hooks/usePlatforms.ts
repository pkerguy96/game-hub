import axios from "axios";
import useData, { FetchResponse } from "./useData";
import { useQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Platform>>("platforms/lists/parents")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
