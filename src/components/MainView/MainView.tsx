import { Container, debounce, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import useOompaLoompas from "../../hooks/useOompaLoompas";
import CardOompaLoompa from "./CardOompaLoompa";

function MainView() {

  const {
    oompaLoompas,
    onSearch,
    isLoading,
    error,
  } = useOompaLoompas();

  const [query, setQuery] = useState("");

 
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
      <TextField
        value={query}
        onChange={onChangeSearch}
        placeholder="Search Oompa Loompas"
        fullWidth
        margin="normal"
      />
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
            <Grid size={4} key={oompaLoompa.first_name}>
              <CardOompaLoompa oompaLoompa={oompaLoompa} />
            </Grid>
          )})}
      </Grid>
    </Container>
  );
}

export default MainView;
