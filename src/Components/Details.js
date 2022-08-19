import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getDetails } from '../Api'
import Loader from './Loader'
import style from './styles/Detais.module.css'

const Details = () => {
  const {id} = useParams()
  const [pokemon, setPokemon] = React.useState()
  const [carregando, setCarregando] = React.useState()
  let visualType

  React.useEffect(()=>{
    getDetails(id, setPokemon, setCarregando)
  },[])

  
    let local = window.localStorage.getItem('visual')
    if(pokemon){
      if(local === '1') visualType = pokemon['sprites']['front_default']
      else if(local === '2') visualType = pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
      else if(local === '3') visualType = pokemon['sprites']['other']['home']['front_default']
    }
  

  if(carregando) return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} ><Loader /></div>
  if(pokemon)return (
    <>
    <header className={style.header}>
      <Link className={style.backButton} to='/'>
        <span>V</span><p>Back</p>
      </Link>
    </header>

    <section className={style.container}>
      <div  className={style.pictureContainer + ' ' + pokemon.types[0].type.name}>
        <img className={'visual'+local} src={visualType} alt={'foto do ' + id}/>
      </div>

      <div className={style.infosContainer}>
        <div className={style.infos}>
          <div className={style.mainInfos}>
            <h1 id={style.name} >Name: {id}</h1>
            <p>Height: {pokemon.height * 10}Cm</p>
            <p>Weight: {pokemon.weight / 100}Kg</p>
            <p>Type: {pokemon.types[1] ? pokemon.types[0].type.name +' and '+ pokemon.types[1].type.name : pokemon.types[0].type.name}</p>
          </div>
          <ul className={style.statsContainer}>
            {pokemon.stats.map((item)=>{
              return (
              <li key={item.stat.name}>
                <div className={style.containerBar}>
                {item.stat.name} 
                  <div className={style.bar2 + ' ' + item.stat.name}></div>
                  <div style={{width: item.base_stat * (1.5)}} className={style.bar + ' ' + item.stat.name}>
                  </div>
                </div>
              </li>)
            })}
          </ul>
        </div>
      </div>

      </section>
      </>
  )
}

export default Details