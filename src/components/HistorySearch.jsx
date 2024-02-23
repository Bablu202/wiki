import { useContext } from "react";
import { WikiContext } from "../WikiContext";

export default function HistorySearch() {
  const { storedValue, setStoredValue, setSearch } = useContext(WikiContext);
  return (
    <div className="p-2">
      <div className="flex mx-4 mb-2">
        {storedValue.length > 0 ? (
          <h6 className="font-semibold text-sm">also searched for..</h6>
        ) : (
          <h6 className="font-semibold text-sm">start Searching..</h6>
        )}
        <button
          className="btn ml-auto"
          onClick={() => {
            localStorage.clear();
            setStoredValue([]);
          }}
        >
          clear
        </button>
      </div>
      <div className="border-b-[1px] border-my-blue border-opacity-30 ">
        {storedValue.map((e, i) => {
          return (
            <button
              className="btn-white mx-2"
              key={i}
              onClick={() => {
                setSearch(e);
              }}
            >
              {e}
            </button>
          );
        })}
      </div>
    </div>
  );
}
