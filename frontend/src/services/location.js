import * as turf from '@turf/turf'

const databasePolygonSample = [
    [
      [
        -0.1121056079864502,
        51.50675917549811
      ],
      [
        -0.1113760471343994,
        51.50570406031107
      ],
      [
        -0.10821104049682617,
        51.506892732640445
      ],
      [
        -0.10860800743103027,
        51.50779423311148
      ],
      [
        -0.1121056079864502,
        51.50675917549811
      ]
    ]
  ]

export const DbPol = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": databasePolygonSample
        }
      }
    ]
  }

export const IsOnPolygon = (point) => {
    const poly = turf.polygon(databasePolygonSample);
    return turf.booleanPointInPolygon(point, poly);
}