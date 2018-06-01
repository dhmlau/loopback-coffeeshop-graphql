'use strict';

module.exports = function(app) {
  var coffeeShop = app.models.CoffeeShop;

  var cs1 = {
    city: 'Toronto',
    capacity: 20,
  };
  var cs2 = {
    city: 'Markham',
    capacity: 30,
  };
  var cs3 = {
    city: 'Richmond Hill',
    capacity: 30,
  };

  coffeeShop.create([cs1, cs2, cs3], function(err, results) {
    console.log(results);
  });
};
