import "./searcht.css";
const SearchBar =(props)=>{ //retrive data from app.js
    const {onSearchInputChange}=props;
    const handleChange = (e)=> {
        e.preventDefault(); //to store value
        onSearchInputChange(e.target.value);
    };
    return(
        <div class="box">
            <form name="search">
                <input type="text" class="input" name="txt" onmouseout="this.value = ''; this.blur();" onChange={handleChange}/>
            </form>
            <i class="fas fa-search"></i>
        </div>
    );
};
export default SearchBar;