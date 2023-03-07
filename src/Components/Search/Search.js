import './Search.css';

const Search = () => {

  return (
    <form className="search-form"> 
      <input 
      type="text" 
      name="searchValue"
      placeholder="Search by Ingredient Name"
      />
    </form>
  )
}


export default Search;