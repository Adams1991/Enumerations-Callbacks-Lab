const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitleList = function () {
    return this.films.map((film) => {
      return film.title;
    })
};

module.exports = Cinema;
