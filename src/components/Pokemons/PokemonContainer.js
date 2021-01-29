import React from 'react';
import { connect } from 'react-redux';
import { onPageChanget, GetPokemons} from '../../redux/pokemons-reducer';
import Preloader from '../../common/Preloader';
import Paginator from '../../common/Paginator';
import s from "./Pokemon.module.css";
import Pokemon from './Pokemon';


class PokemonContainer extends React.Component {

    componentDidMount(){
        if (this.props.Pokemons.length == 0){
            this.props.GetPokemons(this.props.currentPage, this.props.page)
        }
      

    }
    

    onPageChanget = (p) => {
        this.props.onPageChanget(p, this.props.currentPage, this.props.page)
    }

    getProfilePokemon = (namePokemon) =>{
      this.props.getProfilePokemon(namePokemon)
    }

    

render(){
  
    return <div className={ s.body__page}>
      <div className={s.paginator}>
        <Paginator
        count={this.props.count}
        page={this.props.page}
        currentPage={this.props.currentPage}
        onPageChanget={this.onPageChanget}
      />
      </div>
    {this.props.isFetching ? <div className={s.preloader}> <Preloader /> </div> : 
    <div className={s.PokemonCard__main}>
    { this.props.Pokemons.map( p => <Pokemon name={p.name}/>)}
     </div> }
    </div>
}
}


let mapStateToProps = (state) => ({
    Pokemons: state.Pokemons.Pokemons,
    count: state.Pokemons.count,
    page: state.Pokemons.page,
    currentPage: state.Pokemons.currentPage,
    isFetching: state.Pokemons.isFetching
  });

const  PokemonContainerHOC=connect(mapStateToProps, {GetPokemons, onPageChanget})(PokemonContainer);

export default  PokemonContainerHOC