import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import {getHeroesById} from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {
    const {heroeId} = useParams();
     
    
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
    
    if(!hero){
        return <Redirect to ="/" />
    }

    const handleReturn = ()=>{
        if(history.length <= 2){
            history.push('/');
        }else{

            history.goBack();
        }
    }
    const{
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../heroes/assets/heroes/${id}.jpg`} className="img-thumbnail animate__animated animate__fadeInLeft" alt={superhero}/>
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego:</b>{alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b>{publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance:</b>{first_appearance}
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                onClick={handleReturn}
                className="btn btn-outline-info">
                    Return
                </button>
            </div>
        </div>
    )
}
