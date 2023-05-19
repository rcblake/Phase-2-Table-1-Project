function Sort({ sortOption, handleSortChange }) {
    return (
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="">All The Games!</option>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    );
  }
  
  export default Sort;