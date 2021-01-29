import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "../../common/Preloader";
import { getProfilePokemon } from "../../redux/pokemons-reducer";
import ProfilePokemon from "./ProfilePokemon";

class ProfilePokemonContainer extends React.Component {
  state = {
    Pokemon: [],
  };
  namePokemon = this.props.match.params.namePokemon;

  componentDidMount() {
    let resultFilterProfilePokemon = this.props.ProfilePokemon.filter(
      (p) => p.name === this.namePokemon
    );
    if (resultFilterProfilePokemon.length === 0) {
      this.props.getProfilePokemon(this.namePokemon)
    } else{
        let k = resultFilterProfilePokemon[0];
    this.setState((state) => ({
      Pokemon: k,
    }));
    }
    
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let resultFilterProfilePokemon = this.props.ProfilePokemon.filter(
        (p) => p.name === this.namePokemon
      );
      let k = resultFilterProfilePokemon[0];
      this.setState((state) => ({
        Pokemon: k,
      }));
    }
  }

  render() {
    return (
      <div>
        {this.props.isFetching === true ? (
          <Preloader />
        ) : (
          <ProfilePokemon
            name={this.state.Pokemon.name}
            abilities={this.state.Pokemon.abilities}
            forms={this.state.Pokemon.forms}
            order={this.state.Pokemon.order}
            weight={this.state.Pokemon.weight}
            sprites={this.state.Pokemon.sprites}
            moves={this.state.Pokemon.moves}
          />
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  ProfilePokemon: state.Pokemons.ProfilePokemon,
  isFetching: state.Pokemons.isFetching,
});

const ProfilePokemonWithState = compose(
  connect(mapStateToProps, { getProfilePokemon }),
  withRouter
)(ProfilePokemonContainer);

export default ProfilePokemonWithState;
