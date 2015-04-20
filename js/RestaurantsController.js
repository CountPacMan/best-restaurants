restaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push( { name: $scope.restaurantName, type: $scope.restaurantType, location: $scope.restaurantLocation, proper: "not reviewed" } );
    $scope.restaurantName = null;
    $scope.restaurantType = null;
    $scope.restaurantLocation = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
  $scope.sortColumn = function(clickedColumn) {
    if (!$scope.column || ($scope.column[0] === '-' && $scope.column.substr(1) === clickedColumn) || $scope.column != clickedColumn) {
      $scope.column = clickedColumn;
    } else {
      $scope.column = '-' + clickedColumn;
    }
  }
});
