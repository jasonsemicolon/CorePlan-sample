import type { Feature, Position, GeoJSON } from "geojson";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, {
  FullscreenControl,
  Layer,
  LayerProps,
  NavigationControl,
  Source,
} from "react-map-gl";
import type { FillLayer, LineLayer } from "react-map-gl";
import { ActivityType } from "../../../models/DrillHoles";
import { useTheme } from "@mui/material";

/* ======= Types ======== */
type MapType = {
  area?: Position[][];
  mapCenter?: number[];
  data: ActivityType[];
  tab: string;
  controls?: boolean;
};

/**
 * @component Map
 */
const Map = ({ area, mapCenter, data, tab, controls = true }: MapType) => {
  let theme = useTheme();

  const polygonData = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [area],
    },
    properties: null,
  };

  const polygonLayerStyle: LineLayer = {
    id: "polygon",
    type: "line",
    source: {
      type: "geojson",
      data: polygonData as GeoJSON,
    },
    paint: {
      "line-color": theme.palette.primary.light,
      "line-width": 2,
    },
  };

  return (
    <ReactMapGL
      style={{ width: "100%", height: "100%" }}
      initialViewState={{
        latitude: mapCenter?.[0],
        longitude: mapCenter?.[1],
        zoom: 12,
      }}
      attributionControl={false}
      mapStyle="mapbox://styles/mapbox/satellite-v8"
      mapboxAccessToken="pk.eyJ1IjoiamFzcGVyOHZlcmNub2NrZSIsImEiOiJjazFnNHd5bHEwanhxM2xxbGpyM2lubGVvIn0.0bupq1xoTuqYx8B1vG_azw"
    >
      {controls && (
        <>
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
        </>
      )}

      {data?.map((feature: ActivityType, index: number) => {
        if (feature?.category === tab || tab === "all") {
          return (
            <Source
              key={index}
              id={`circle-data-${index}`}
              type="geojson"
              data={
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [
                      feature?.coordinates?.[1],
                      feature?.coordinates?.[0],
                    ],
                  },
                } as Feature
              }
            >
              <Layer
                id={`circle-${index}`}
                type="circle"
                paint={{
                  "circle-radius": 3,
                  "circle-color": feature?.color,
                }}
              />
            </Source>
          );

          // ===== Second Way - A bit faster ======

          // return (
          //   <Marker
          //     key={index}
          //     latitude={feature.coordinates?.[0]!}
          //     longitude={feature.coordinates?.[1]!}
          //   >
          //     <Box
          //       sx={{
          //         backgroundColor: feature?.color,
          //         width: "10px",
          //         height: "10px",
          //         borderRadius: "50%",
          //         display: "block",
          //       }}
          //     />
          //   </Marker>
          // );
        } else {
          return null;
        }
      })}

      <Source id="polygon-data" type="geojson" data={polygonData as GeoJSON}>
        <Layer {...polygonLayerStyle} />
      </Source>
    </ReactMapGL>
  );
};
export default Map;
