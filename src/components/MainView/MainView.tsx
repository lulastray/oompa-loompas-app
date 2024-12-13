import { Container, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import searchImg from "../../assets/ic_search.png";
import useOompaLoompas from "../../hooks/useOompaLoompas";
import CardOompaLoompa from "./CardOompaLoompa";

function MainView() {

  const {
    filteredOompaLoompas: oompaLoompas,
    isLoading,
    error,
    query,
    setQuery,
    onHandleClick,
  } = useOompaLoompas();

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }


  return (
    <Container sx={{ height: "100vh" }}>
      <Stack pt={8} justifyContent="center" alignItems="center">
        <Stack direction="row" justifySelf="start" width={1}>
          <TextField
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            margin="normal"
            slotProps={{
              input: {
                endAdornment:
                  <InputAdornment position="end">
                    <img src={searchImg} alt="search" style={{ height: '15px' }} />
                  </InputAdornment>
              }
            }}
          />
        </Stack>
        <Typography variant="h4" component="h1">
          Find your Oompa Loompa
        </Typography>
        <Typography variant="subtitle1" component="h1">
          There are more than 100k
        </Typography>
        {isLoading && (
          <Typography mt={2} variant="body1">
            Loading...
          </Typography>
        )}
        <Grid mt={4} container spacing={3}>
          {oompaLoompas &&
            oompaLoompas.map((oompaLoompa) => {
              return (
                <Grid size={4} key={oompaLoompa.id}>
                  <CardOompaLoompa oompaLoompa={oompaLoompa} onHandleClick={onHandleClick} />
                </Grid>
              )
            })}
        </Grid>

      </Stack>
    </Container>
  );
}

export default MainView;
