import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { MAPBOX_ACCESS_TOKEN } from '../../config'

import './styles.css';

import { IsOnPolygon, DbPol } from '../../services/location.js'

const Map = () => {
    const defaultLocation = {
        lat: 51.5066,
        long: -0.11,
        zoom: 15
    }

    const [map, setMap] = useState(null);
    const [userMarker, setUserMarker] = useState(null);

    const mapContainer = useRef(null);

    //Temporary simulate walking Move marker
    useEffect(() => {
        const interval = setInterval(() => {
            if (userMarker) 
            {
                const { lng,lat } = userMarker.getLngLat(); // -0.000010;
                userMarker.setLngLat([lng+0.000100, lat]);
                if (IsOnPolygon([lng+0.000100, lat])) alert('Entered!')
            }
        }, 1000);
        return () => clearInterval(interval);
      }, [userMarker, IsOnPolygon]);

    useEffect(() => {
        mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
        const initializeMap = ({ setMap, mapContainer, setUserMarker, DbPol }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: [defaultLocation.long, defaultLocation.lat],
                zoom: defaultLocation.zoom,
            });

            map.on("load", () => {
                setMap(map);
                const um = new mapboxgl.Marker()
                    .setLngLat([
                        -0.11263132095336914,
                        51.506618940077324
                      ]);
                setUserMarker(um.addTo(map));

                map.addSource('near-points', {
                    'type': 'geojson',
                    'data':DbPol                    
                    });

                map.addLayer({
                    'id': 'near-points',
                    'type': 'fill',
                    'source': 'near-points',
                    'paint': {
                        'fill-color': '#088',
                        'fill-opacity': 0.8
                        }
                });

                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainer, setUserMarker, DbPol });
    }, [map, defaultLocation, userMarker]);

    return (
        <div>
            <div ref={mapContainer} className="mapContainer" />
        </div>
    );
}

export default Map;