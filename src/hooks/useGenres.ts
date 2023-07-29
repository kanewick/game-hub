import genres from "../data/genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Data mostly static so left retrieval from saved data
const useGenres = () => ({ data: genres, isLoading: false, error: null });
// Retrieve from server using below
// const useGenres = () => useData<Genre>("/genres");

export default useGenres;
