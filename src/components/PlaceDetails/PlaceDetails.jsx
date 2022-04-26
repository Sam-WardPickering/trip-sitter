import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'

function PlaceDetails({ place }) {
  console.log(place)
  return (
    <h1>{place.name}</h1>
  )
}

export default PlaceDetails