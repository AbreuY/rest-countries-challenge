import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SearchAndFilter } from "../component/SearchAndFilter";


export const CountriesCards = () => {

  const [countries, setCountries] = useState([]);

  const childToParent = (childData) => {
    setCountries(childData);
  };

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    if (response.ok) {
      const body = await response.json();
      setCountries(body);
    }
  };


  useEffect(() => { getCountries(); }, []);
  useEffect(() => { }, [countries]);

  return (
    <>
      <SearchAndFilter childToParent={childToParent} />
      <div className="row mx-auto">
        {countries.map((countrie, index) => {
          return <div key={index} className="col-12 col-lg-4 col-xl-4 col-xxl-3 col-sm-6 custom-mb-5">
            <div className="card h-100 shadow-sm border-0 rounded-3" style={{ width: "18rem" }}>
              <Link to={`country/${countrie.name}`}>
                <img src={countrie.flags.png} className="custom-card-img-top rounded-top" alt="..." />
              </Link>

              <div className="card-body">
                <h5 className="card-title mt-4 fw-bold">{countrie.name}</h5>
                <div className="text-start d-flex"><p className="fw-bold me-1">Population:</p><p>{new Intl.NumberFormat().format(countrie.population)}</p></div>
                <div className="text-start d-flex"><p className="fw-bold me-1">Region:</p> <p>{countrie.region}</p></div>
                <div className="text-start d-flex"><p className="fw-bold me-1">Capital:</p> <p>{countrie.capital}</p></div>



              </div>
            </div>
          </div>;

        })}

      </div>
    </>
  );
};