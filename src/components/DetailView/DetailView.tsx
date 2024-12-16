import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import Markdown from "markdown-to-jsx";
import useDetailOompaLoompa from "../../hooks/useDetailOompaLoompa";

function DetailView() {
  const { oompaLoompa } = useDetailOompaLoompa()

  if (!oompaLoompa) return null
  const { image, firstName, lastName, details } = oompaLoompa

  return (
  
      <Grid container spacing={4} mt={10} px={4} justifyContent="center" direction={{xs: "column", md:"row"}} alignItems={{xs:"center", md:"start"}}>
        <Grid size={{xs: 12, sm:10, lg:5}}>
          <Box width={1}>
            <img src={image} alt="Oompa Loompa" style={{ objectFit: "contain", width: "100%", height: "auto" }} />

          </Box>
        </Grid>
        <Grid size={{xs: 12, sm:10, lg:5}}>
          <Typography variant="h5">{firstName} {lastName}</Typography>
          <Markdown options={{ wrapper: Typography, forceWrapper: true }}>
            {details?.description || ''}
          </Markdown>
        </Grid>
      </Grid>

  )
}

export default DetailView