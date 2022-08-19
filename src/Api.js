const url = "https://pokeapi.co/api/v2/"

export async function seachPokemons(page, pokemons, setPokemons, setCarregando){
  try {
    setCarregando(true)
    const response = await fetch(`${url}pokemon/?offset=${page}0`)
    const responseJSON = await response.json()
    if(pokemons) return setPokemons([...pokemons,  ...responseJSON.results])
    if(!pokemons) return setPokemons (responseJSON.results)
  } catch (error) {
    console.log('erro: ' + error)
  }finally{
    setCarregando(false)
  }
}

export async function getDetails(id, setPokemon, setCarregando){
  try {
    setCarregando(true)
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    const responseJSON = await response.json()
    setPokemon(responseJSON)
  } catch (error) {
    console.log('erro: ' + error)
  }finally{
    setCarregando(false)
  }
  
}