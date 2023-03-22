export const fetchMovies = (url) => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          return data.Search;
        } else {
          console.log("Movie Is Not Found");
          return [];
        }
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  };
  