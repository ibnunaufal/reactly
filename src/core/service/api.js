import Config from "../../config/Config";
import ErrorHandler from "./errorHandler";
// const axios = require("axios");
import axios from 'axios';


const baseUrlDev = Config.BaseUrlDev;

const bearer = () => {
  return localStorage.getItem("token_redux").replaceAll('"', "");
};


export const getAll = () => {
  return new Promise((resolve, reject) => {
    axios
      // .get(`${baseUrlDev}main_a/info/info_versi_mobile/a`, {
      .get(`${baseUrlDev}main_a/info/info_versi_mobile_all`, {
        headers: {
          // Authorization: `Bearer ${bearer()}`,
        },
      })
      .then((res) => {
        let token = res.headers.authorization;
        if (!res.headers.authorization) {
          token = localStorage.getItem("token_redux");
        }
        if (token) {
          if (!token.includes("Bearer")) {
            token = token.replaceAll("Bearer ", "");
          }
          localStorage.setItem("token_redux", token.replaceAll("Bearer ", ""));
        }
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        ErrorHandler(err);
        reject(err);
      });
  });
};
