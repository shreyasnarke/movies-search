function ML(props){
    const {lists}=props;
return (<div className="movies-list">
        {lists?.map((lists) => {
          return (
            <div className="a">
              <div className="img">
                <img
                  src={`https://image.tmdb.org/t/p/w342${lists.backdrop_path} `}
                  alt="movies"
                />
              </div>
              <div className="title">{lists.original_title}</div>
              {/* <div className="description" >{data.overview}</div> */}
              <button>Add To Favorite</button>
            </div>
          );
        })}
      </div>
);}
export default ML;