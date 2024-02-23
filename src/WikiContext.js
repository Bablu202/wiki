import { createContext, useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
//Create CONTEXT ------- 1
const WikiContext = createContext();

function WikiProvider({ children }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState();
  //Hook - History
  const [storedValue, setStoredValue] = useLocalStorage("searchHistory", []);
  //URL Endpoint
  let endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=&format=json&origin=*&srlimit=50&srsearch=${search}`;

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === "") return;
    if (search === storedValue[storedValue.length - 1]) return;
    if (storedValue?.includes(search)) {
      setStoredValue((prev) => prev.filter((e) => e !== search));
      setStoredValue((prev) => [...prev, search]);
    } else {
      setStoredValue((prev) => [...prev, search]);
    }
    getResponse();
  };

  //Get Response from EndPoint FETCH Here
  const getResponse = async () => {
    if (results >= 1 && search === storedValue[storedValue.length - 1]) return;
    setIsLoading(true);
    try {
      let json = await (await fetch(endpoint)).json();
      console.log(json);
      setResults(json.query.search);
    } catch (err) {
      setSearchError(err);
    } finally {
      if (searchError)
        console.warning("there is an error with search Data ", searchError);
      setIsLoading(false);
    }
  };

  //on Selecting History one

  //AUTO Submit with timer -- setBug*
  useEffect(() => {
    if (results >= 1 && search === storedValue[storedValue.length - 1]) return;

    if (search === "") return;
    const timeOut = setTimeout(() => {
      console.log("time out");
      getResponse();
    }, 1000);
    return () => {
      console.log("return time");
      clearTimeout(timeOut);
    };
  }, [search]);
  return (
    // Provide value to  childs -------------------------2
    <WikiContext.Provider
      value={{
        search,
        setSearch,
        storedValue,
        setStoredValue,
        handleSearch,
        isLoading,
        setIsLoading,
        results,
      }}
    >
      {/* CONSUME in Childs by use Context --------- 3*/}
      {children}
    </WikiContext.Provider>
  );
}

export { WikiProvider, WikiContext };
