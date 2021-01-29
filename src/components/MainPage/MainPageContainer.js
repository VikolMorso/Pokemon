import React from 'react';
import { connect } from 'react-redux';
import { onPageChanget, GetPokemons, getProfilePokemon} from '../../redux/pokemons-reducer';
import Preloader from '../../common/Preloader';
import Paginator from '../../common/Paginator';
import s from "./MainPage.module.css";
import PokemonCard from './PokemonCard/PokemonCard';


class MainPageContainer extends React.Component {

    componentDidMount(){
      
        this.props.GetPokemons(this.props.currentPage, this.props.page)

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
    { this.props.ProfilePokemon.map( p =>
       <PokemonCard key={p.id}  name={p.name} className={s.PokemonCard__item} name={p.name} sprites={p.sprites} />)}
      
      
     </div> }
    
    </div>
}
}


let mapStateToProps = (state) => ({
    Pokemons: state.Pokemons.Pokemons,
    count: state.Pokemons.count,
    page: state.Pokemons.page,
    currentPage: state.Pokemons.currentPage,
    isFetching: state.Pokemons.isFetching,
    ProfilePokemon: state.Pokemons.ProfilePokemon
  });

const  MainPageContainerHOC=connect(mapStateToProps, {GetPokemons, onPageChanget, getProfilePokemon})(MainPageContainer);

  export default  MainPageContainerHOC