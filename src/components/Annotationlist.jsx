import React from "react";

const Annotationlist = ({ category }) => {
  return (
    <div className="border w-1/4">
      <h2 className="text-center text-3xl py-2 text-white bg-blue-700">
        Records
      </h2>
      <div className="mx-5">
        <ul>
          {category &&
            category.map((c, i) => (
              <li key={i} className="flex justify-between item-center">
                <span>{c}</span>
                <label htmlFor="my-modal-6" className="btn modal-button">
                  <span>X</span>
                </label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Annotationlist;
