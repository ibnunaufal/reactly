import React, { useEffect, useState } from "react";
import * as API from "../../core/service/api.js";

export default function HomeComponents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getAll()
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      All:
      {data.map((res:any) => (
        <div key={res._id}>{res.versionCode}</div>
      ))}
    </div>
  );
}
