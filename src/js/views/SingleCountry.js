import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const SingleCountry = () => {
    let params = useParams();
    const [country, setCountry] = useState([]);

    const getCountry = async (name) => {
        const response = await fetch(`https://restcountries.com/v2/name/${name.toLowerCase()}`);
        if (response.ok) {
            const body = await response.json();
            setCountry(body);
        }

    };

   

    useEffect(() => {
        if (params.name) {
            getCountry(params.name);
        }
    }, [params.name]);

    return (
        <div className="container-fluid bg-light">
        <div className="container">
            <div className="flex-row align-items-start mb-5 pt-5">

                <Link to="/" className="btn btn-white bg-white shadow-sm ps-4 pe-4"><i className="fas fa-arrow-left shadow-sm"></i> Back</Link>
            </div>
            {country.map((element, index) => {
                return <div key={index} className="row">
                    <div className="col-12 col-lg-4 col-xl-6 col-xxl-4 text-center"><img src={element.flags.png} className="img-fluid shadow-sm" /></div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4">
                        <div className="text-start d-flex"><h5 className="mt-5 mb-4 fw-bold">{element.name}</h5></div>
                        <div className="text-start d-flex"><p className="fw-bold me-1">Native Name:</p><p>{element.nativeName}</p></div>
                        <div className="text-start d-flex"><p className="fw-bold me-1">Population:</p><p>{new Intl.NumberFormat().format(element.population)}</p></div>
                        <div className="text-start d-flex"><p className="fw-bold me-1">Region:</p><p>{element.region}</p></div>
                        <div className="text-start d-flex"><p className="fw-bold me-1">Sub Region:</p><p>{element.subregion}</p></div>
                        <div className="text-start d-flex"><p className="fw-bold me-1">Capital:</p><p>{element.capital}</p></div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-4 pt-md-5">
                        <div className="mt-5 mb-5">
                            <div className="text-start d-flex"><p className="fw-bold me-1">Top Level Domain:</p><p>{element.topLevelDomain}</p></div>
                            <div className="text-start d-flex"><p className="fw-bold me-1">Currencies:</p>{element.currencies.map((curr, index) => { return <p key={index}>{curr.name}</p> })}</div>
                            <div className="text-start d-flex"><p className="fw-bold me-1">Languages:</p><p>{element.languages.map((lang, index) => { return (index ? ', ' : '') + lang.name })}</p></div>
                            {element.borders && <div className="text-start mt-5"><p className="fw-bold me-1">Border Countries:</p><p>{element.borders.map((border, index) => { return <span key={index} className='badge text-black fw-normal bg-white border'>{(index ? ' ' : '') + border}</span> })}</p></div>}

                        </div>
                    </div>
                </div>
            })}
        </div>
        </div>
    )
};