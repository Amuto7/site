import React from "react";
import City from "./city";
import data from "../data";
export default function Cites() {
  let end = data.map((item) => {
    return <City key={item.id} {...item} />;
  });
  return <div className="travel--cont">{end}</div>;
}
