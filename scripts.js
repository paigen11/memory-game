var cards = [
'<img src="images/kitten.jpg">',
	'<img src="images/puppy.jpg">',
	'<img src="images/baby_goat.jpg">',
	'<img src="images/lamb.jpg">',
	'<img src="images/calf.jpg">',
	'<img src="images/piglets.png">'
	];

// var easy =[
// 	'<img src="images/kitten.jpg">',
// 	'<img src="images/puppy.jpg">',
// 	'<img src="images/baby_goat.jpg">',
// ];

// var medium =[
// 	'<img src="images/kitten.jpg">',
// 	'<img src="images/puppy.jpg">',
// 	'<img src="images/baby_goat.jpg">',
// 	'<img src="images/lamb.jpg">',
// 	'<img src="images/calf.jpg">',
// 	'<img src="images/piglets.png">'
// ];

// var difficult =[
// 	'<img src="images/kitten.jpg">',
// 	'<img src="images/puppy.jpg">',
// 	'<img src="images/baby_goat.jpg">',
// 	'<img src="images/lamb.jpg">',
// 	'<img src="images/calf.jpg">',
// 	'<img src="images/piglets.png">'
// ];

var wins = document.getElementsByClassName('winTotal').innerHTML;



// randomly shuffle cards  
function shuffle(cards){
	var currentIndex = cards.length, temporaryValue, randomIndex;

	while (0 !== currentIndex){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = cards[currentIndex];
		cards[currentIndex] = cards[randomIndex];
		cards[randomIndex] = temporaryValue;
	}
	return cards;
}

shuffle(cards);
console.log(cards);

$(document).ready(function(){

// select level of difficulty
	// $('.difficulty').click(function(){
	// 	switch($(this).attr('class')){
	// 		case 'easy':
	// 			cards = easy;
	// 			break;
	// 		case 'medium':
	// 			cards = medium;
	// 			break;
	// 		case 'hard':
	// 			cards = difficult;
	// 			break;		
	// 	}

	// $('.container').addClass('hidden');
	// $('.container-fluid').removeClass('hidden');	
	// });	

	$('.reset').click(function(){
		$('.winner').addClass('hidden');
		$('.options').removeClass('hidden');
	});

	var gridSize = cards.length;
	console.log(cards);
	var mgHTML='';
	var card = '';

	shuffle(cards);

	for(var i=0; i < gridSize; i++){
		card = cards[i];
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner unmatched">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';	
	}

	shuffle(cards);

	for(var i=0; i < gridSize; i++){
		card = cards[i];
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner unmatched">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';	
	}

	$('.mg-contents').html(mgHTML);
});		
	
$(document).ready(function(){	
	$('.mg-tile-inner').click(function(){
		$(this).toggleClass('flip');
		var cardsUp = $('.mg-tile-inner.flip.unmatched');
		
		if(cardsUp.length == 2){
			// check to see if they are the same
			if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
				// the pictures are the same. this is a match
				console.log("Match!");
				setTimeout(function(){
					cardsUp.addClass('matched');

					//fade out matched cards
					$('.matched').fadeOut(1500);
					cardsUp.removeClass('unmatched');
					
				}, 500)
			
			}else{
				// the user has flipped two cards and they don't match
				console.log("Not a match...");
				setTimeout(function(){
					cardsUp.removeClass('flip');
					}, 1000);
				
			if($('.container').find('.matched').length === cards.length * 2){
					$('.container-fluid').addClass('hidden');
					$('.winner').removeClass('hidden');
					wins++;
					console.log("winner");
					};			
			}
		}

	});
});

