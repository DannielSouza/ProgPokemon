import React from 'react'
import InputSearch from './InputSearch'
import style from './styles/Header.module.css'
import pokeIcon1 from '../assets/pokeIcon1.jpg'

const Header = ({visual, setVisual}) => {
  function pokemonVisual1(){
    setVisual('1')
  }
  function pokemonVisual2(){
    setVisual('2')
  }
  function pokemonVisual3(){
    setVisual('3')
  }

  function changeVisual(){
    if(visual === '1'){
      setVisual('2')
    }
    if(visual === '2'){
      setVisual('3')
    }
    if(visual === '3'){
      setVisual('1')
    }
  }

  return (
    <header className={style.header}>
      <h3> P<img src={pokeIcon1} alt='logomarca'/>kedex</h3>

      <InputSearch />

      <div className={style.options}>

        <button onClick={changeVisual}>{visual}</button>
        
      </div>
    </header>
  )
}

export default Header


/* ['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] */