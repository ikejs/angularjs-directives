app.controller('MainController', ['$scope', ($scope) => {
  $scope.todo = {
    title: "things to do",
    list: [
      "Here's 1 task",
      "And here's another!"
    ]
  };

  $scope.books = {
    title: "books to read",
    list: [
      "Book 1",
      "Book 2"
    ]
  }
 
  $scope.addItem = (itemList, inputText) => {
    itemList.push(inputText)
  }
}])