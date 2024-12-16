import { debounce } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { selectOompaLoompasState } from "../store/oompaLoompa.selectors";
import { fetchOompaLoompas } from "../store/thunks/oompaLoompaThunk";

function useOompaLoompas() {
  const [query, setQuery] = useState("");

  const { list: oompaLoompas, currentPage, isLoading, hasMore, error } = useAppSelector(selectOompaLoompasState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage === 0) dispatch(fetchOompaLoompas())
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


  const filteredOompaLoompas = useMemo(() => {
    if (!query) return oompaLoompas

    return oompaLoompas.filter((oompaLoompa) => {
      return oompaLoompa.firstName.toLowerCase().includes(query.toLowerCase()) ||
        oompaLoompa.lastName.toLowerCase().includes(query.toLowerCase()) ||
        oompaLoompa.profession.toLowerCase().includes(query.toLowerCase())
    })
  }, [query, oompaLoompas])

  const onHandleClick = useCallback((id: number) => navigate(`/${id}`), [navigate])


  return { filteredOompaLoompas, hasMore, isLoading, error, query, setQuery, onHandleClick };
}

export default useOompaLoompas;
