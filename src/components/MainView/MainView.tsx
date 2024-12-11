import { Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useOompaLoompas from "../../hooks/useOompaLoompas";
import CardOompaLoompa from "./CardOompaLoompa";

function MainView() {

  const {
    filteredOompaLoompas: oompaLoompas,
    isLoading,
    error,
    query,
    setQuery,
    
  } = useOompaLoompas();

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
        onChange={(e)=>setQuery(e.target.value)}
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
