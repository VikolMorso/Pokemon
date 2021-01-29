import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})


export const API = {
    getPokemons(offset = 9, numberPokemons=9) {
        return instance.get(`pokemon/?limit=${offset}&offset=${numberPokemons}`).then(response => response.data)
    },
    getPokemonProfile(namePokemon){
        
        return instance.get(`pokemon/${namePokemon}`).then(response => response.data)
    }
}
//?limit=${currentPage}&offset=${page}