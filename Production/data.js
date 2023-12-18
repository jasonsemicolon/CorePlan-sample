const totalData = 54;

const activities = [
  {
    name: "Authorization",
    color: "#d9d9d9",
    category: "approvals",
  },
  {
    name: "Heritage Approval",
    color: "#ed9d72",
    category: "approvals",
  },
  {
    name: "Pad Prep",
    color: "#ed11cc",
    category: "pre-drilling",
  },
  {
    name: "Pegging",
    color: "#fa0000",
    category: "pre-drilling",
  },
  {
    name: "Clearing",
    color: "#fac402",
    category: "pre-drilling",
  },
  {
    name: "PreDrill GeoCheck",
    color: "#7cde6a",
    category: "pre-drilling",
  },
  {
    name: "Drilling",
    color: "#e37917",
    category: "drilling",
  },
  {
    name: "Logging",
    color: "#139145",
    category: "past-drilling",
  },
];

const statusList = [
  { label: "incomplete", property: "inComplete", color: "#2958cf" },
  { label: "in Progress", property: "inProgress", color: "#ffd500" },
  { label: "Completed", property: "completed", color: "#8ccc43" },
  { label: "Skipped", property: "skipped", color: "#eeeeee" },
  { label: "Not Required", property: "notRequired", color: "#ffffff" },
];

const totalActivities = activities.map((item) => {
  let total = totalData;
  let d = {
    ...item,
    total: totalData,
    statuses: statusList.map((s, index) => {
      let random = Math.floor(Math.random() * total);
      total = total === 0 ? 0 : total - random;
      random = total === 0 ? 0 : random;
      if (index === statusList.length - 1 && total > 0) {
        random = totalData - (totalData - total);
      }
      return {
        ...s,
        value: Math.abs(random),
      };
    }),
  };
  return d;
});

const mapCenter = [-32.55, 116.14];

function PointMakerNearMapCenter() {
  return [
    Math.random() * 0.07 + mapCenter[0],
    Math.random() * 0.07 + mapCenter[1],
  ];
}

function drillProgramMaker(name, color, category) {
  let randomStatusNumber = Math.floor(Math.random() * statusList.length);

  return {
    coordinates: PointMakerNearMapCenter(),
    name,
    color,
    category,
    status: statusList[randomStatusNumber],
  };
}

let area = [
  [116.120459, -32.546878],
  [116.131551, -32.544811],
  [116.132176, -32.525481],
  [116.179532, -32.521679],
  [116.181937, -32.58303],
  [116.121818, -32.581583],
  [116.120459, -32.546878],
];

function programMaker(programName, isMain = true) {
  let data = {
    programName,
    activities: activities.map((prop) => {
      return drillProgramMaker(prop?.name, prop?.color, prop?.category);
    }),
  };
  if (isMain) {
    data.programs = [
      "G017823",
      "G0578875",
      "G012423",
      "G012223",
      "G012123",
      "G01242423",
      "G0124223",
      "G012253",
      "G0175523",
      "G0175723",
      "G015823",
      "G01787823",
      "G03525",
      "G03242524",
      "G0324242",
      "G0342424",
      "G03251",
      "G0354545",
    ].map((item) => {
      return programMaker(item, false);
    });
  }
  return data;
}

function dashboardMapDataMaker() {
  let fakeArray = [];

  for (let i = 0; i <= 200; i++) {
    fakeArray.push(1);
  }

  let markers = [
    {
      name: "marker 1",
      color: "#fac402",
    },
    {
      name: "marker 2",
      color: "#ed11cc",
    },
    {
      name: "marker 3",
      color: "#ed9d72",
    },
  ];

  let points = [];

  markers?.forEach((item) => {
    fakeArray.forEach(() => {
      points.push({
        ...item,
        coordinates: PointMakerNearMapCenter(),
      });
    });
  });

  let data = {
    area,
    mapCenter,
    markers,
    points,
  };
  return data;
}

module.exports = {
  area,
  programMaker,
  mapCenter,
  activities,
  totalActivities,
  dashboardMapDataMaker,
};
