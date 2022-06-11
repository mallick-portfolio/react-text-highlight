import React, { useState } from "react";
import Annotationlist from "./Annotationlist.jsx";
import Annotationwindow from "./Annotationwindow.jsx";
import Records from "./Records.jsx";

const AllRecords = () => {
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState(0);
  console.log(category)
  return (
    <div className="flex">
      <Records setSelected={setSelected} records={records} />
      <Annotationwindow category={category} setCategory={setCategory} selected={selected} records={records} />
      <Annotationlist category={category} />
    </div>
  );
};

const records = [
  {
    id: 1,
    content:
      "Person Lorem org ipsum dolor sit, amet consectetur adipisicing elit. Labore nulla repudiandae voluptate? At, odit. Incidunt sequi officiis blanditiis facilis dicta, officia impedit quo quaerat nobis deleniti praesentium quia placeat quam corrupti atque non",
  },
  {
    id: 2,
    content:
      "Lorem ipsum person dolor sit, amet org consectetur adipisicing elit. Labore nulla repudiandae voluptate? At, odit. Incidunt sequi officiis blanditiis facilis dicta, officia impedit quo quaerat nobis deleniti praesentium quia placeat quam corrupti atque non",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit, amet person consectetur adipisicing elit. Labore nulla repudiandae voluptate? At, odit. Incidunt sequi officiis blanditiis facilis dicta, officia impedit quo quaerat nobis deleniti praesentium quia placeat quam corrupti atque non",
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit, amet org consectetur adipisicing elit. Labore nulla repudiandae voluptate? At, odit. Incidunt sequi officiis blanditiis facilis person org dicta, officia impedit quo quaerat nobis deleniti praesentium quia placeat quam corrupti atque non",
  },
];
export default AllRecords;
