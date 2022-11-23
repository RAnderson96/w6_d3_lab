const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function () {
  
  const result = this.films.map((film) => {
    return film.title;
  })
  console.log(result)
  return result;
};

Cinema.prototype.getFilmByTitle = function (filmTitle){
  // const result = this.films.some((films) => {
  //   film.title === filmTitle;
    

  // })
  // console.log(result)

  let result;
  for (const film of this.films) {
    if (filmTitle === film.title){
      result = film;
    }

  }
  return result;
}

Cinema.prototype.filterFilmByGenre = function (genre){
  const result = this.films.filter((film) => {
  return film.genre === genre;
  })
  console.log(result)
  return result;
} 

Cinema.prototype.filterFilmByYear = function(year){
  let result = this.films.filter((film) => {
    return film.year === year;
  })
  if (result.length === 0){
    result = "There are no films from that year! :-)"
  }
  console.log(result);
  return result;
};

Cinema.prototype.getFilmsOfLength = function(length){
  let result = this.films.filter((film) => {
  return film.length > length;
  });
  return result
}

Cinema.prototype.getTotalRunTime = function(){
  let runningTotal = 0;
  const result = this.films.reduce((runningTotal, filmRunTime) => {
    return runningTotal + filmRunTime.length;

  } )
  return result
}

module.exports = Cinema;
