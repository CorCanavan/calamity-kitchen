import './Search.css';

const Search = ({handleSearchValueInput, searchValue}) => {

  return (
    <form className="search-form"> 
      <input 
      className="search-input"
      type="text" 
      name="searchValue"
      placeholder="Search by Ingredient Name"
      value={searchValue}
      onChange={(e) => handleSearchValueInput(e.target.value)}
      />
    </form>
  )
}


export default Search;