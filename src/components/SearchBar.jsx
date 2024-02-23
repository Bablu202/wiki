import { useContext } from "react";
import { WikiContext } from "../WikiContext";

export default function SearchBar() {
  const { handleSearch, search, setSearch } = useContext(WikiContext);
  return (
    <div className="my-2">
      <form onSubmit={handleSearch}>
        <h3
          className="text-2xl 
          tracking-widest
         text-my-blue  "
        >
          Wiki
        </h3>
        <input
          className="active:border-none px-4 
          py-2 w-72 rounded-md focus:outline-none "
          type="search"
          placeholder="press / to search here .. "
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
