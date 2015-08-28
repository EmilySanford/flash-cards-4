app.controller('NewCardController', function($scope, FlashCardsFactory){
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
		FlashCardsFactory.addFlashCard(newCard);
	};

	
})