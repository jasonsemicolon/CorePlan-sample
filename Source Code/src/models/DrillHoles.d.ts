export type AreaType = [number, number][];

export type StatusType = {
  label: string;
  property: string;
  color: string;
  value?: number;
};

export type ActivityType = {
  name: string;
  color: string;
  category: string;
  total?: number;
  coordinates?: number[];
  statuses?: StatusType[];
  status?: StatusType;
};

export type MapCenterType = [number, number];

export type ProgramType = {
  programName: string;
  activities: ActivityType[];
};

export type MainProgramType = {
  programName: string;
  activities: ActivityType[];
  programs: ProgramType[];
};

export type allProgramsType = MainProgramType[];

export type ActivitiesDataType = {
  area: AreaType;
  mapCenter: MapCenterType;
  activities: ActivityType[];
  allPrograms: allProgramsType;
};
