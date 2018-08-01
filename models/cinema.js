const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitleList = function () {
    return this.films.map((film) => {
      return film.title;
    })
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => film.title === title);
};


Cinema.prototype.filterByGenre = function(genre){
  return this.films.filter(film => film.genre === genre);
}

Cinema.prototype.hasFilmFromYear = function(year){
  return this.films.some(film => film.year === year)
};

Cinema.prototype.allFilmsOverDuration = function (duration) {
  return this.films.every(film => film.length > duration)
};

module.exports = Cinema;
