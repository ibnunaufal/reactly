import Home from "./components/homeComponent";
import UnusedHomeComponents from "./components/unusedHomeComponent";

const Routes: any = [
    {
      path: "",
      redirect: "home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/coba",
      component: UnusedHomeComponents
    },
  ];
  export default Routes;