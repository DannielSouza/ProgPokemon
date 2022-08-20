import React from 'react'
import { getDetails } from '../Api'
import style from './styles/Pokemon.module.css'
import Loader from './Loader'
import { Link } from 'react-router-dom';

const Pokemon = ({id, name, visual}) => {
  const [pokemon, setPokemon] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)
  let mainType
  let visualType

  React.useEffect(()=>{
    getDetails(name, setPokemon, setCarregando)
  },[])

  
  if(pokemon){
    if(visual === '1') visualType = pokemon['sprites']['front_default']
    else if(visual === '2') visualType = pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    else if(visual === '3') visualType = pokemon['sprites']['other']['home']['front_default']
  }
  
 
  if(!pokemon) return <Loader />
  if(pokemon)return (
    
    
    <Link to={`/detalhes/${name}`} className={style.container +' '+ pokemon.types[0].type.name}>
    
    {id? <span className={style.id}>#{id}</span> : null}

    <img className={'visual'+visual} src={visualType} alt={'foto do ' + name}></img>

    <h2>{name}</h2>
    <div>
      {pokemon.types.map((type, index)=>{
        return <span className={style.type  +' '+ pokemon.types[0].type.name} key={index}>{type.type.name}</span>
      })}
    </div>
    </Link>
  )
  return <Loader />
}

export default Pokemon