import HomeAgain from "./components/homeAgainComponent";
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
    {
      path: "/coba",
      component: HomeAgain
    },
  ];
  export default Routes;