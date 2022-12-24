const options = {

  headers: {
    "Api-Key": "8234db11c162011590d14a3080848ed6",
  },
};




fetch("https://api.themoviedb.org/3/movie/550?api_key=8234db11c162011590d14a3080848ed6", options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));