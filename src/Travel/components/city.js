import React from "react";
import loca from "../images/loca.png";

export default function City(props) {
  return (
    <div className="travel--sec">
      <img className="title--img" src={props.imageUrl} alt="" />
      <div className="sec--content">
        <section className="maps-icon-sec">
          <img className="loca--icon" src={loca} alt="" />
          <span className="city--name">{props.location}</span>
          <span className="location--n">
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </span>
        </section>
        <h1 className="title">{props.title}</h1>
        <p className="dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="discrip">{props.description}</p>
      </div>
    </div>
  );
}
