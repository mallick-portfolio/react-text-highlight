import React from "react";

const Records = ({ records, setSelected }) => {
  return (
    <div className="border w-1/4">
      <h2 className="text-center text-3xl py-2 text-white bg-blue-700">
        Records
      </h2>
      <ul>
        {records.map((record, i) => (
          <li
            onClick={() => setSelected(i)}
            key={i}
            className="py-2 pl-2 cursor-pointer border"
          >
            <span className="mr-2">{i + 1}.</span>
            {record.content.slice(0, 25)}...
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Records;
