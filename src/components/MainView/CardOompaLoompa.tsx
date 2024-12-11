import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { OompaLoompa } from '../../types'

function CardOompaLoompa({oompaLoompa}: {oompaLoompa: OompaLoompa}) {
const {image, firstName, lastName, gender, profession} = oompaLoompa
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Oompa Loompa"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profession}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardOompaLoompa