import { useCallback, useEffect, useState } from "react";
import { getAllOompaLoompas, searchOompaLoompas } from "../services/oompaLoompasService";
import { OompaLoompa } from "../types/types";

function useOompaLoompas() {
  const [oompaLoompas, setOompaLoompas] = useState<OompaLoompa[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  console.log(oompaLoompas);
  console.log(page)
 

  const fetchOompaLoompas = useCallback(async () => {
    if (!hasMore || isLoading) return;
    setIsLoading(true);
    try {
      const response = await getAllOompaLoompas(page);
      const { results } = response;
      setOompaLoompas(results);
      if (results.length > 0) {
        setOompaLoompas((prev) => [...prev, ...results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false); 
      }
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [page, hasMore, isLoading]);

  const onSearch = useCallback(async (query: string) => {
    setIsLoading(true);
    try {
      const results = await searchOompaLoompas(query); // Nueva función en el servicio
      setOompaLoompas(results);
      setHasMore(false); // No necesitamos más paginación durante la búsqueda
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchOompaLoompas()
  }, [])

  return { fetchOompaLoompas, onSearch, oompaLoompas, hasMore, isLoading, error };
}

export default useOompaLoompas;
