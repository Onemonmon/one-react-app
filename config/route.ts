type RouteType = {
  path: string;
  name: string;
  component?: string;
  icon?: string;
  routes?: RouteType[];
};

const routes: RouteType[] = [
  {
    path: "/welcome",
    name: "welcome",
    component: "./Welcome",
  },
  {
    path: "/admin",
    name: "admin",
    icon: "crown",
    routes: [
      {
        path: "/admin/",
        name: "admin",
        icon: "smile",
        component: "./Admin",
      },
      {
        path: "/admin/user",
        name: "user",
        icon: "smile",
        component: "./User",
      },
    ],
  },
];

export default routes;
