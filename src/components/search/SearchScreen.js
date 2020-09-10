import React, { useMemo } from 'react'
import queryString from 'query-string';

import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import {useForm} from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';

import {getHeroesByName} from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const {q= ''} = queryString.parse(location.search);
    console.log(q);
    const initialForm = {
        searchText: q
    }
    const [formValues, handleInputChange, reset] = useForm(initialForm);
    const {searchText} = formValues;
    const heroesFiltered = useMemo(()=>getHeroesByName(q), [q]);
    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }
    /* const heroesFiltered = getHeroesByName(searchText); */


    return (
        <div>
            <h1>Search</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <form onSubmit={handleSearch}>
                        <input 
                        type="text"
                        placeholder="Find your hero"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={handleInputChange}/>
                    <button 
                    type="submit" 
                    className="btn m-1 btn-block btn-outline-primary"
                    >
                        Search
                    </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {(q==='') 
                        && <div className="alert alert-info">
                        Search a Hero 
                    </div>}
                    {(q!=='' && heroesFiltered.length === 0) 
                        && <div className="alert alert-warning">
                        There is no hero with {q} 
                    </div>}
                    {
                        heroesFiltered.map(hero=>(
                            <HeroCard
                                key={hero.id} {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}