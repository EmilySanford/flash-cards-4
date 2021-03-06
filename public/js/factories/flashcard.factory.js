app.factory('FlashCardsFactory', function($http) {

  var categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

  function getFlashCards (category) {
    var config = {};
    if (category) config.params = { category: category };
    return $http.get('/cards/', config).then(function(response){
      return response.data;
    });
  }
  return {
    getFlashCards: getFlashCards,
    categories: categories,
    addFlashCard: addFlashCard
  };

  function addFlashCard(newCard){
    console.log(newCard)
    return $http.post('/cards', newCard).then(function(response){
      console.log(response);
    });
  }

});
