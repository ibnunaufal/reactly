const Config: any = {
    BaseUrlDev: "https://api.dev.katalis.info/",
    BaseUrlProd: "https://api.dev.katalis.info/",
  };
  let baseUrl = "";
  export const check = () => {
    if (process.env.NODE_ENV == "production") {
      baseUrl = Config.BaseUrlProd;
  
      // remove consoles in production
      console.log = () => {};
      console.debug = () => {};
      console.info = () => {};
      console.warn = () => {};
    } else {
      baseUrl = Config.BaseUrlDev;
    }
    return baseUrl;
  };
  export default Config;
  