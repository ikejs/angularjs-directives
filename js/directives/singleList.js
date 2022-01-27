app.directive('singleList', () => {
  return {
    restrict: "E",
    scope: {
      varList: "="
    },
    templateUrl: "js/directives/singleList.html"
  }
})