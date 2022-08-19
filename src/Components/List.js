import React from 'react'
import {seachPokemons} from '../Api'
import Header from './Header'
import Pokemon from './Pokemon'
import style from './styles/List.module.css'

const List = ({visual, setVisual}) => {
  const [page, setPage] = React.useState(0)
  const [pokemons, setPokemons] = React.useState(null)
  const [carregando, setCarregando] = React.useState(true)
  const sentinela = React.useRef()

  React.useEffect(()=>{
    seachPokemons(page, pokemons, setPokemons, setCarregando)
  },[page])

  React.useEffect(()=>{
      const observer = new IntersectionObserver((entries)=>{
      if(entries.some((entry)=> entry.isIntersecting)){
        setPage((page)=> page + 2)
      }
    },[])
      
    observer.observe(document.getElementById('sentinela'))
    return () => observer.disconnect()
     
  },[])
  
  return (
    <>
    <Header visual={visual} setVisual={setVisual} />
    <ul className={style.container}>
      {pokemons && pokemons.map((pokemon, index)=>{
        let id = index + 1
        return (
        <div key={pokemon.name}  className={style.item}>
          <Pokemon id={id} name={pokemon.name} visual={visual}/>
        </div>
          )
      })}
    </ul>
    <div ref={sentinela} id='sentinela'></div>
    </>
  );






  
}

export default List