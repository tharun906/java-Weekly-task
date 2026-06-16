import "./SearchBar.css";

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  }
  

function SearchBar({searchTerm, setSearchTerm}: SearchBarProps) {
    return (
      <div className="search-bar">

      

        <input 
          type="text" placeholder="Search Category" value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  }
  
  export default SearchBar;