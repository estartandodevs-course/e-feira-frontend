import React, { useRef } from 'react';
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api';
import { Adress, AdressContainer, AdressTitle, AdressCard } from './styles';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import TextField from '@mui/material/TextField';

//https://react-google-maps-api-docs.netlify.app/#section-introduction
//https://www.ultimateakash.com/blog-details/Ii0zJGAKYAo=/How-To-Integrate-Google-Places-Autocomplete-in-React-2022

const PlaceComponent = () => {
  const inputRef = useRef();

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
    }
  };

  return (
    <AdressContainer>
      <AdressTitle>Endereço de Entrega</AdressTitle>
      <AdressCard>
        <MapOutlinedIcon className="map-icon" style={{ fontSize: '60' }}></MapOutlinedIcon>
        <Adress>
          <LoadScript googleMapsApiKey={process.env.AIzaSyCKHnGqm6KGkbhp8j2VbfQeBrsXSqXzHQE} libraries={['places']}>
            <StandaloneSearchBox onLoad={ref => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                className="form-control"
                placeholder="Inserir o endereço"
                sx={{ width: 220, ml: 2 }}
              />
            </StandaloneSearchBox>
          </LoadScript>
        </Adress>
      </AdressCard>
    </AdressContainer>
  );
};

export default PlaceComponent;
