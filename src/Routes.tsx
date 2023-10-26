import HomeComponents from "./components/homeComponent";

const Routes: any = [
    {
      path: "",
      redirect: "Home",
    },
    {
      path: "/home",
      component: HomeComponents,
    },
  ];
  export default Routes;