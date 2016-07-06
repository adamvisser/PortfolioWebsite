


function resumeFrameworksFlasher(){
	var resumeItemsToFade =  ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10', '#11'];
	resumeItemsToFade.forEach(randomFadeInAndOut);
	$('#stop')
		.transition({
			animation  : 'scale',
				duration   : '.5s',
		})
		.transition({
			animation  : 'tada',
		})
	;
}

function randomFadeInAndOut($selector){
	//have a list of fade types and directsions
	var animationTypes = ['slide', 'swing', 'fade'];
	var animationDirection = ['up', 'right', 'down', 'left'];
	//have a few random numbers to get us the stuff we need down below
	var $randomAnimationIn = 0;
	var $randomDirectionIn = 1;
	var $randomAnimationOut = 1;
	var $randomDirectionOut = 2;
	//now goahead and do a fade in and then out
	$($selector)
		.transition({
			animation  : animationTypes[$randomAnimationIn]+' '+animationDirection[$randomDirectionIn],
				duration   : '.15s',
		})
		.transition({
			animation  : animationTypes[$randomAnimationOut]+' '+animationDirection[$randomDirectionOut],
			duration   : '.15s',
			onComplete : function() {
				alert('done');
			}
		})
	;
}



function flashyChainHome(){
	homeFlashyChainTitleHide();
}




/*
Dont touch the below
*/
function homeFlashyChainTitleHide(){
	$('#title')
		.transition({
			animation  : 'tada',
			duration   : '.5s',
		})
		.transition({
			animation  : 'scale',
			onComplete : function() {
				homeFlashyChainQuoteSlideIn();
			}
		})
	;
}

function homeFlashyChainQuoteSlideIn(){
	$('#quote')
		.transition({
			animation  : 'scale',
			duration   : '.5s',
		})
		.transition({
			animation  : 'tada',
			onComplete : function() {
				homeFlashyChainMenuTitleShow();
			}
		})
	;
}

function homeFlashyChainMenuTitleShow(){
	$('#menuAdamHeader')
		.transition({
			animation  : 'scale',
			duration   : '.5s',
		})
		.transition({
			animation  : 'tada',
			onComplete : function() {
				console.log('did the flashy home chain stuff');
			}
		})
	;
}
/*
Dont touch the above
*/