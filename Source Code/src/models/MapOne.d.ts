import { ActivityType, AreaType, MapCenterType } from "./DrillHoles";

export type DashboardMapData = {
  area: AreaType;
  mapCenter: MapCenterType;
  markers: {
    name: string;
    color: string;
  };
  points: ActivityType[];
};
