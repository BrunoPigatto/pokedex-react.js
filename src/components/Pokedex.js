import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokédex</h1>
        <p>Paginação:</p>
      </div>
      {loading ? (
        <div>Carregando a lista de pokémons ...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons?.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
