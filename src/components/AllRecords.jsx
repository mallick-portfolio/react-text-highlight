import React, { useState } from "react";
import Annotationlist from "./Annotationlist.jsx";
import Annotationwindow from "./Annotationwindow.jsx";
import Records from "./Records.jsx";

const AllRecords = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex">
      <Records setSelected={setSelected} records={records} />
      <Annotationwindow selected={selected} records={records} />
      <Annotationlist />
    </div>
  );
};

const records = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nulla repudiandae voluptate? At, odit. Incidunt sequi officiis blanditiis facilis dicta, officia impedit quo quaerat nobis deleniti praesentium quia placeat quam corrupti atque non",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nulla repudiandae voluptate? At, odit. Incidunt sequi officiis blanditiis facilis dicta, officia impedit quo quaerat nobis deleniti praesentium quia placeat quam corrupti atque non",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nulla repudiandae voluptate? At, odit. Incidunt sequi officiis blanditiis facilis dicta, officia impedit quo quaerat nobis deleniti praesentium quia placeat quam corrupti atque non",
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nulla repudiandae voluptate? At, odit. Incidunt sequi officiis blanditiis facilis dicta, officia impedit quo quaerat nobis deleniti praesentium quia placeat quam corrupti atque non",
  },
];
export default AllRecords;
