(function() {
	angular
		.module('qa.quiz')
		.controller('Quiz', Quiz)

	Quiz.$inject = ['$scope', '$timeout', 'GetX', 'UpdateRoute'];



	function Quiz($scope, $timeout, GetX, UpdateRoute){
		GetX.questions().then(successCallback, errorCallback);
		var vm = this;
		var index = 0;
		vm.answered = answered;

		var path = "app/assets/";

		function answered(isCorrect){
			if(isCorrect){
				vm.showWrongBanner = false;
				if(index < vm.questions.length-1){
					showCorrectGif(index);
					vm.showCorrectBanner = true;
					document.getElementById('successAudio').play();
					$timeout(function(){
						vm.showCorrectBanner = false;
						document.getElementById('correctAnswer').src = "";
						document.getElementById('wrongAnswer').src = "";
						displayQuestion.bind(vm, ++index)()
					},3000)
					
				}
				else{
					UpdateRoute.update('/done');
				}
			}
			else {
				document.getElementById('errorAudio').play();
				vm.showWrongBanner = true;
				showErrorGif(index);
			}
		}

		function showCorrectGif(index) {
			switch (index) {
				case 0 : document.getElementById('correctAnswer').src = path + "Hell_yeah.gif";
						 break;
				case 1 : document.getElementById('correctAnswer').src = path + "correct.png";
				         break;
				case 2 : document.getElementById('correctAnswer').src = path + "family_guy.gif";
						 break;
				case 3 : document.getElementById('correctAnswer').src = path + "Fist Bump.gif";
						 break;
				case 4 : document.getElementById('correctAnswer').src = path + "goal!.gif";
						 break;
			    case 5 : document.getElementById('correctAnswer').src = path + "gangnam.gif";
			    		 break;
			    case 6 : document.getElementById('correctAnswer').src = path + "success_big_bang.gif";
			    		 break;
			    case 7 : document.getElementById('correctAnswer').src = path + "tom_cruise_jump_on_couch.gif";
			    		 break;
			}
		}

		function showErrorGif(index) {
			switch(index) {
				case 0 : document.getElementById('wrongAnswer').src = path + "oh_no_Family Guy.gif";
						 break;
				case 1 : document.getElementById('wrongAnswer').src = path + "giphy2.gif";
						 break;
				case 2 : document.getElementById('wrongAnswer').src = path + "wrong.gif";
					     break;
				case 3 : document.getElementById('wrongAnswer').src = path + "ohnomyeyes.gif";
					     break;
				case 4 : document.getElementById('wrongAnswer').src = path + "oh_no_seinfeld.gif";
						 break;
				case 5 : document.getElementById('wrongAnswer').src = path + "giphy3.gif";
						 break;
				case 6 : document.getElementById('wrongAnswer').src = path + "giphy1.gif";
					     break;
				case 7 : document.getElementById('wrongAnswer').src = path + "exorcist - no.gif";
						 break;
			}
		}

		function displayQuestion(index){
			console.log(vm, index)
			vm.question = vm.questions[index];
		}

		function successCallback(response){
			vm.questions = response.data.Questions;
			displayQuestion(index)
		}

		
		function errorCallback(err){
			console.log('ERR!!! ', err);
		}
	}
})();