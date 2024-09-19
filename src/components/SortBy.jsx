export const SortBy = ({ searchParams, setSearchParams }) => {
    const handleClick = ({ target: { name } }) => {
      const sortParams = name.split(" ")
      if (sortParams.length === 2) {
        setSearchParams({
          ...searchParams,
          sort_by: sortParams[0],
          order: sortParams[1],
        })
      } else {
        setSearchParams({ ...searchParams, sort_by: name })
      }
    }
  
    return (
      <>
        <ul className="sorting-options-box">
          <li className="sorting-options-item">
            <p>Date:</p>
            <button
              className="sorting-button"
              name="created_at"
              onClick={handleClick}
            >
              Sort by Ascending
            </button>
            <button
              className="sorting-button"
              name="created_at asc"
              onClick={handleClick}
            >
              Sort by Descending
            </button>
          </li>
          <li className="sorting-options-item">
            <p>Comment Count</p>
            <button
              className="sorting-button"
              name="comment_count"
              onClick={handleClick}
            >
              Sort by Ascending
            </button>
            <button
              className="sorting-button"
              name="comment_count asc"
              onClick={handleClick}
            >
              Sort by Descending
            </button>
          </li>
          <li className="sorting-options-item">
            <p>Votes</p>
            <button className="sorting-button" name="votes" onClick={handleClick}>
              Sort by Ascending
            </button>
            <button
              className="sorting-button"
              name="votes asc"
              onClick={handleClick}
            >
              Sort by Descending
            </button>
          </li>
        </ul>
      </>
    )
  }
  