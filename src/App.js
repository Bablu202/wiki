import HistorySearch from "./components/HistorySearch";
import SearchBar from "./components/SearchBar";
import WikiSearch from "./components/WikiSearch";
import { WikiProvider } from "./WikiContext";

export default function App() {
  return (
    <div
      className="font-sans flex flex-col  text-center h-screen	
     bg-my-white text-my-blue  md:px-20 lg:px-40  xl:px-56"
    >
      <WikiProvider>
        <SearchBar />
        <HistorySearch />
        <WikiSearch />
      </WikiProvider>
    </div>
  );
}
