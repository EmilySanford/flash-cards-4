app.controller('MainController', function ($scope, FlashCardsFactory, $log, ScoreFactory) {

  $scope.categories = FlashCardsFactory.categories;
  $scope.selectedCategory;
  $scope.getCategoryCards = function (category) {
    $scope.loading = true;
    FlashCardsFactory.getFlashCards(category).then(function(cards){
      ScoreFactory.reset();
      $scope.selectedCategory = category;
      $scope.flashCards = cards;
    }).catch(function(err){
      $log.error('error getting cards:', err);
    }).finally(function(){
      $scope.loading = false;
    });
  };

  $scope.$on('someEvent', function (data) {
    console.log("it all works!!!!!")
    $scope.getCategoryCards(data.category)
  });
  $scope.getCategoryCards();
});
