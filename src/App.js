import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainPageContainerHOC from './components/MainPage/MainPageContainer';
import Navigation from './components/Navigation/Navigation';
import PageWelcome from './components/PageWelcome/PageWelcome';
import PokemonContainerHOC from './components/Pokemons/PokemonContainer';
import ProfilePokemonWithState from './components/ProfilePokemon/ProfilePokemonContainer';

function App(props) {
  return (
    <BrowserRouter >
    <div className="App">
      <Header/>
      <Navigation />
      <Switch>
      <Route exact path="/MainPage" render={() => <MainPageContainerHOC store={props.store}/>} />
      <Route path="/Profile/:namePokemon?" render={()=> <ProfilePokemonWithState store={props.store}/>}/>
      <Route path="/Pokemons" render={()=> <PokemonContainerHOC store={props.store}/>}/>
      <Route path="/" render={()=> <PageWelcome />}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
