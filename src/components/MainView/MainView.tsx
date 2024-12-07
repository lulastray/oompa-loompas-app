import { Container, debounce, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import useOompaLoompas from "../../hooks/useOompaLoompas";
import CardOompaLoompa from "./CardOompaLoompa";

function MainView() {
  const {
    oompaLoompas,
    fetchOompaLoompas,
    onSearch,
    isLoading,
    hasMore,
    error,
  } = useOompaLoompas();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (
        !isLoading &&
        hasMore &&
        window.innerHeight + document.documentElement.scrollTop + 50 >=
          document.documentElement.scrollHeight
      ) {
        fetchOompaLoompas();
      }
    };
    const debouncedHandleScroll = debounce(handleScroll, 200);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [isLoading, hasMore, fetchOompaLoompas]);

  const handleSearch = debounce((value: string) => {
    onSearch(value);
  }, 300);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    handleSearch(event.target.value);
  };

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  return (
    <Container sx={{ height: "100vh" }}>
      <Typography variant="h4" component="h1">
        Find your Oompa Loompa
      </Typography>
      {isLoading && (
        <Typography mt={2} variant="body1">
          Loading...
        </Typography>
      )}
      <Grid mt={4} container spacing={3}>
        {oompaLoompas &&
          oompaLoompas.map((oompaLoompa) =>{ 
            console.log(oompaLoompa.id)
            return (
            <Grid size={4} key={oompaLoompa.id}>
              <CardOompaLoompa oompaLoompa={oompaLoompa} />
            </Grid>
          )})}
      </Grid>
    </Container>
  );
}

export default MainView;
