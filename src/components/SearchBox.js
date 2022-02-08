import React from "react";

const SearchBox =({seachfield,searchChange}) => {
    return (
    <div className="pa2">
       <input type="search" placeholder="search prod" className="pa3 ba b--lightest-blue bg-green" onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;