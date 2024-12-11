import { debounce } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { selectOompaLoompasState } from "../store/oompaLoompa.selectors";
import { fetchOompaLoompas } from "../store/thunks/oompaLoompaThunk";

function useOompaLoompas() {
  const { list: oompaLoompas, isLoading, hasMore, error } = useAppSelector(selectOompaLoompasState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOompaLoompas());
  }, []);

  const handleScroll = useCallback(() => {
    if (
      !isLoading &&
      hasMore &&
      window.innerHeight + document.documentElement.scrollTop + 50 >=
        document.documentElement.scrollHeight
    ) {
      dispatch(fetchOompaLoompas());
    }
  }, [dispatch, isLoading, hasMore]);

  const debouncedHandleScroll = useMemo(() => debounce(handleScroll, 200), [handleScroll]);
  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [debouncedHandleScroll]);

  const onSearch = useCallback(async (query: string) => {
    const resultSearch = oompaLoompas.filter((oompaLoompa) => {
      return oompaLoompa.first_name.toLowerCase().includes(query.toLowerCase()) ||
       oompaLoompa.last_name.toLowerCase().includes(query.toLowerCase()) || 
       oompaLoompa.profession.toLowerCase().includes(query.toLowerCase())
  });
  console.log(resultSearch);
    return resultSearch;
  }, [oompaLoompas])

return { fetchOompaLoompas, onSearch, oompaLoompas, hasMore, isLoading, error };
}

export default useOompaLoompas;
