CREATE EXTENSION postgis;
CREATE TABLE IF NOT EXISTS world (id uuid, type varchar(10));

-- https://en.wikipedia.org/wiki/Spatial_reference_system#Identifier
-- WGS84 = 4326
SELECT AddGeometryColumn('world', 'geom', 4326, 'GEOMETRY', 2);

INSERT INTO world (id, type, geom)
VALUES (
    '40bb0724-441f-4cfb-b101-e2859621adc7',
    'guide',
    ST_GeomFromGeoJSON('{
        "type":"Polygon",
        "coordinates":[[
            [-0.08658707141876221, 51.50483924831494],
            [-0.08715033531188965, 51.504335045329995],
            [-0.08609890937805176, 51.50387090652489],
            [-0.08581459522247314, 51.504077933050795],
            [-0.08608281612396239, 51.50421149805221],
            [-0.08566439151763915, 51.504488644181215],
            [-0.08658707141876221, 51.50483924831494]
        ]],
        "crs":{"type":"name","properties":{"name":"EPSG:4326"}}
    }')
)

SELECT ST_Distance(w.geom,
    ST_SetSRID(
        ST_MakePoint(51.5039510459368, -0.08750438690185547),
    4326)), id, type, ST_AsGeoJSON(geom)
FROM world as w
ORDER BY 1 ASC
LIMIT 10;

