import Highlighter from "react-highlight-words";
import RemoveCategory from "./RemoveCategory.jsx";
const Annotationwindow = ({ records, selected, setCategory, category }) => {
  return (
    <div className="border w-2/4">
      <div className="text-3xl flex gap-3 py-2 pl-2 text-white bg-blue-700">
        <div
          onClick={() => setCategory([...category, "person"])}
          className="border px-4 text-blue-500 bg-white rounded-md"
        >
          PERSON
        </div>
        <div
          onClick={() => setCategory([...category, "org"])}
          className="border px-4 text-blue-500 bg-white rounded-md"
        >
          ORG
        </div>
      </div>
      <div>
        {records.map((record, i) => (
          <div
            key={i}
            className={`my-2 px-2 ${selected === i ? "block" : "hidden"}`}
          >
            <Highlighter
              highlightClassName="bg-red-300"
              searchWords={category}
              autoEscape={true}
              textToHighlight={record.content}
            />
            {record.content}
            <RemoveCategory category={category} setCategory={setCategory} record={record} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Annotationwindow;
