import React from "react";
const Annotationwindow = ({ records, selected }) => {
  return (
    <div className="border w-2/4">
      <div className="text-3xl flex gap-3 py-2 pl-2 text-white bg-blue-700">
        <div className="border px-4 text-blue-500 bg-white rounded-md">PERSON</div>
        <div className="border px-4 text-blue-500 bg-white rounded-md">ORG</div>
      </div>
      <div>
        {records.map((record, i) => (
          <div
            key={i}
            className={`my-2 px-2 ${selected === i ? "block" : "hidden"}`}
          >
            {record.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Annotationwindow;
