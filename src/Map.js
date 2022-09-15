import React from 'react'
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './App.css'
function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      });
      if (!isLoaded) return <div>Loading...</div>;
  return (
    <LocationMap/>
  )
}
function LocationMap() {
  const center = useMemo(() => ({ lat: 33.801349, lng: 10.883175 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map