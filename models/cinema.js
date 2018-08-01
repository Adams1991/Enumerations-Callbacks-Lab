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

module.exports = Cinema;
