import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

import pointer from '../../assets/images/pointer.png'

function Map({ lat, lng, container }) {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 400,
    latitude: lat,
    longitude: lng,
    zoom: 15,
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  })

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/zxcarlesme/ckt5rjqrn2bd717o662k29qsq"
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      <Marker latitude={lat} longitude={lng} offsetLeft={-25} offsetTop={-50}>
        <img src={pointer} alt="Map Pointer" width={50} height={50} />
      </Marker>
    </ReactMapGL>
  )
}

export default Map
