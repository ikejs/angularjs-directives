app.controller('MainController', ['$scope', ($scope) => {
  $scope.list = [
    "Here's 1 task",
    "And here's another!"
  ];

  $scope.addItem = () => {
    $scope.list.push($scope.addToDo)
  }
}])