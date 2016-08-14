var Pokedex = React.createClass({
  render: function() {
    return (
      <div className="pokedex">
        <PokemonProfile/>
        <PokemonStats/>
      </div>
    );
  }
});

var PokemonProfile = React.createClass({
  render: function() {
    return (
      <div className="pokemonProfile">
        <h1>Pokemon Name</h1>
      </div>
    );
  }
});

var PokemonStats = React.createClass({
  render: function() {
    return (
      <div className="pokemonStats">
        <h2>Stats</h2>
        <p>Height</p>
        <p>Weight</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Pokedex />,
  document.getElementById('content')
);
