app.controller('MainController', ['$scope', ($scope) => {
  $scope.todo = {
    title: "ToDo List",
    list: [
      "Here's 1 task",
      "And here's another!"
    ]
  };

  $scope.books = {
    title: "Books List",
    list: [
      "Book 1",
      "Book 2"
    ]
  }
 
  $scope.addItem = (itemList, inputText) => {
    itemList.push(inputText)
  }
}])