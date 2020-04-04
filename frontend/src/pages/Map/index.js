import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { MAPBOX_ACCESS_TOKEN } from '../../config'

import './styles.css';

const Map = () => {
    const defaultLocation = {
        lat: 51.5,
        long: -0.07,
        zoom: 15
    }
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: [defaultLocation.long, defaultLocation.lat],
                zoom: defaultLocation.zoom
            });

            map.on("load", () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map, defaultLocation]);

    return (<div>
        <div ref={mapContainer} className="mapContainer" />
    </div>);
}

export default Map;