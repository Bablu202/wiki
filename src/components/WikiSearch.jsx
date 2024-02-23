import { useContext } from "react";
import usePagination from "../hooks/usePagination";
import { WikiContext } from "../WikiContext";
import Spinner from "./Spinner";

export default function WikiSearch() {
  const { results, isLoading, search } = useContext(WikiContext);
  let limitResults = 6;
  const {
    currentItems,
    nextPage,
    prevPage,
    currentPage,
    // totalItems,
    totalPages,
  } = usePagination(results, limitResults);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="text-left  rounded-md bg-white">
      {currentItems.length > 0 && (
        <h6 className="text-sm mx-2 p-0.5">
          Search results for <span className="font-bold">{search}</span>
        </h6>
      )}

      {currentItems.map((e, i) => {
        return (
          <div
            className="border-b-[1px] border-my-blue border-opacity-10 
             mx-5 my-2 p-2  hover:bg-my-white rounded-sm"
            key={i}
            onClick={() =>
              window.open(`https://en.wikipedia.org/wiki/${e.title}`)
            }
          >
            <h4 className="font-semibold text-sm ">{e.title}</h4>
            <p
              className="text-xs"
              dangerouslySetInnerHTML={{ __html: e.snippet }}
            ></p>
          </div>
        );
      })}
      <div className="flex float-right">
        {currentPage !== 1 && (
          <button
            className="btn m-2 "
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            &laquo; Prev
          </button>
        )}
        {currentPage !== totalPages && results.length > limitResults && (
          <button
            className="btn m-2 "
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}
