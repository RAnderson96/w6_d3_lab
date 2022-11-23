const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function (){
    const films_list = cinema.getFilmTitles()
    const actual = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting']
    assert.deepEqual(actual, films_list)
  });

  it('should be able to find a film by title', function(){
    const found_film = cinema.getFilmByTitle("Dunkirk");
    const actual = dunkirk;
    assert.deepEqual(actual,found_film);
  });



  it('should be able to filter films by genre', function(){
    const filteredFilms = cinema.filterFilmByGenre('drama')
    const actual = [moonlight, trainspotting]
    assert.deepEqual(actual, filteredFilms)

  });

  it('should be able to check whether there are some films from a particular year', function(){
    const filmsByYear = cinema.filterFilmByYear(2017);
    const expected = [bladeRunner, dunkirk, trainspotting];
    assert.deepEqual(expected, filmsByYear);
  });


  it('should be able to check whether there are no films from a particular year', function () {
    const filmsByYearNotFound = cinema.filterFilmByYear(2010)
    const actual = "There are no films from that year! :-)"
    assert.strictEqual(actual, filmsByYearNotFound)
  });

  it('should be able to check whether all films are over a particular length', function(){
    const filmsOverLenght = cinema.getFilmsOfLength(130)
    const actual = [bladeRunner, blackPanther]
    assert.deepEqual(actual, filmsOverLenght)
  });



  it('should be able to calculate total running time of all films', function () {
    const filmTotalRunTime = cinema.getTotalRunTime()
    const actual = 622;
    assert.strictEqual(actual, filmTotalRunTime);

  });

});
