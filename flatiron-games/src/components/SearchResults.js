
import GameCard from "./GameCard";

const SearchResults = ({ games }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default SearchResults;