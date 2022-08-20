import React from 'react'
import style from './styles/Header.module.css'
import pokeIcon1 from '../assets/pokeIcon1.jpg'

const Header = ({visual, setVisual}) => {

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

      <div className={style.options}>
        <button onClick={changeVisual}>{visual}</button>
      </div>
    </header>
  )
}

export default Header