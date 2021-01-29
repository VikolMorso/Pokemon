import { API } from "../API/API";

const SET_POKEMONS = "SET_POKEMONS";
const IS_FETCHING = "IS_FETCHING";
const SET_CURRENT = "SET_CURRENT";
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_PROFILE_POKEMON = 'SET_PROFILE_POKEMON';
const CLEAR_ARRAY_POKEMON = 'CLEAR_ARRAY_POKEMON';
const SAVE_ID_POKEMON = 'SAVE_ID_POKEMON'

let initialState = {
  Pokemons: [],
  ProfilePokemon: [],
  page: 9,
  count: 10,
  currentPage: 1,
  isFetching: false,
  offset: 0,
};

const PokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_POKEMONS: {
      
      return { ...state, Pokemons: action.pokemons };
    }
    case SET_PROFILE_POKEMON: {
     
      return { ...state, ProfilePokemon: [...state.ProfilePokemon, action.pokemon] };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, count: action.count };
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case CLEAR_ARRAY_POKEMON: {
      return {...state, ProfilePokemon: []}
    }
    
    default:
      return state;
  }
};

export const SetPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  pokemons
});

export const SetPokemonProfile = (pokemon) => ({
  type: SET_PROFILE_POKEMON,
  pokemon
});

export const SetCurrent = (currentPage) => ({
  type: SET_CURRENT,
  currentPage: currentPage,
});

export const SetTotalCount = (count) => ({
  type: SET_TOTAL_COUNT,
  count
})
 export const clearArrayPokemon =()=>({
   type: CLEAR_ARRAY_POKEMON
 })

export const SetOffset = (p, ) => ({
  
})



export const GetPokemons = (currentPage) => {
  return async (dispatch) => {
    dispatch(clearArrayPokemon())
    let offset = 9;
    let numberPokemons = currentPage * offset;
    
    await API.getPokemons(offset, numberPokemons).then((data) => {
      dispatch(SetTotalCount(data.count))
      
      dispatch(SetPokemons(data.results));
      
      data.results.map( p => dispatch(getProfilePokemon(p.name)))

    });
  };
};

export const onPageChanget = (p) => {
  return async (dispatch) => {
    dispatch(clearArrayPokemon())
    dispatch(isFetchingAC(true));
    dispatch(SetCurrent(p));
    let offset = 9;
    let numberPokemons = p * offset;
    let data = await API.getPokemons(offset, numberPokemons);
    dispatch(isFetchingAC(false));
    dispatch(SetPokemons(data.results));
    
    data.results.map( p => dispatch(getProfilePokemon(p.name)))
    
    
  };
};

export const getProfilePokemon = (namePokemon) => {
 
  return async (dispatch) => {
    dispatch(isFetchingAC(true));
    let data = await API.getPokemonProfile(namePokemon);
    
    dispatch(SetPokemonProfile(data));
    dispatch(isFetchingAC(false));
  }
}

export const isFetchingAC = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});

export default PokemonsReducer;
