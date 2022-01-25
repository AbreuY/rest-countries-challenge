import React, { useEffect, useState } from "react";


export const SearchAndFilter = ({ childToParent }) => {
    const [inputValue, setInputValue] = useState("");

    const searchCountryByWord = async (word) => {
        const response = await fetch(`https://restcountries.com/v2/name/${word}`);
        if (response.ok) {
            const body = await response.json();
            if (body.status == 404) {
                alert("Sorry we can find that country, try with another name!");
                return;
            }
            childToParent(body);
        }
    };
    const getRegion = async (region) => {
        const response = await fetch(`https://restcountries.com/v2/${region == "all" ? "all" : `region/${region}`}`);
        if (response.ok) {
            const body = await response.json();
            childToParent(body);

        }
    };

    return (
            <div className="row">
                <div className="col-12 col-lg-6 p-0">
                    <div className="col-12 d-flex align-items-baseline mb-lg-0 me-lg-3 bg-white shadow-sm p-3 mb-3 rounded">
                        <i className="fas fa-search"></i>
                        <input type="search" className="form-control border-0" placeholder="Search for a country and press" aria-label="Search"
                            value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} onKeyPress={(e) => {
                                if (e.key == "Enter") {
                                    if (e.target.value == "") {
                                        alert("Please write a country name");
                                        return;
                                    }
                                    searchCountryByWord(e.target.value);
                                }
                            }} />
                    </div>
                </div>
                <div className="col-6 col-lg-6 p-0">
                    <div className="text-end">
                        <div>
                        <div className="dropdown me-lg-3">
                            <button className="btn btn-white bg-white dropdown-toggle shadow-sm p-3 mb-5 rounded" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="filterText">Filter by Region</span>
                            </button>
                            <ul style={{width:"100%"}} className="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton1">
                                <li><p className="dropdown-item" onClick={(e) => { getRegion("all") }}>All</p></li>
                                <li><p className="dropdown-item" onClick={(e) => { getRegion("africa") }}>Africa</p></li>
                                <li><p className="dropdown-item" onClick={(e) => { getRegion("americas") }}>Americas</p></li>
                                <li><p className="dropdown-item" onClick={(e) => { getRegion("asia") }}>Asia</p></li>
                                <li><p className="dropdown-item" onClick={(e) => { getRegion("europe") }}>Europe</p></li>
                                <li><p className="dropdown-item" onClick={(e) => { getRegion("oceania") }}>Oceania</p></li>

                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};