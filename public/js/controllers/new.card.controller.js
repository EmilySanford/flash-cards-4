app.controller('NewCardController', function($rootScope, $scope, FlashCardsFactory){
	$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
}
    $scope.addCard = function(newCard){
    console.log("submit works!!!")
		FlashCardsFactory.addFlashCard(newCard);
            $scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
             ]
        }
        $rootScope.$broadcast('someEvent', newCard)
    


    };
	
})