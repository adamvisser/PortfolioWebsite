function setupHome(){
	setupSmoothScroll();
	seutpSideMenu();
	setTimeout(homeFlashyChainTitleHide(), 3000);
	setupHomeResumeFancyScrolls();
}


function resumeFrameworksFlasher(){
	var resumeItemsToFade =  ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10', '#11'];
	randomFadeInAndOut(resumeItemsToFade);
}

function randomFadeInAndOut($selectorList){
	if ($selectorList.length > 0) {
		var $selector = $selectorList.splice(0,1);
		$selector = $selector[0];
		console.log($selector );
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
					duration   : '.08s',
			})
			.transition({
				animation  : animationTypes[$randomAnimationOut]+' '+animationDirection[$randomDirectionOut],
				duration   : '.08s',
				onComplete : function() {
					randomFadeInAndOut($selectorList);
				}
			})
		;
	}else{
		console.log('finished the fancy');
		cockyCallOutDisplay();
	}
}


function cockyCallOutDisplay(){
	
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

function setupHomeResumeFancyScrolls(argument) {
// some example callbacks
$('#resume')
	.visibility({
		onBottomVisible: function(calculations) {
			setTimeout(resumeFrameworksFlasher(), 5000);
		},
		onTopVisibleReverse: function(calculations) {
			setTimeout(resumeFrameworksFlasher(), 5000);
		},
		onTopPassed: function(calculations) {
			$('#stop').hide();
		},
	})
;
}


/*
Dont touch the below
*/
function homeFlashyChainTitleHide(){
	$('#title')
		.transition({
			animation  : 'tada',
			duration   : '.9s',
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
			duration   : '.9s',
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
			duration   : '.9s',
		})
		.transition({
			animation  : 'tada',
		})
	;
}
/*
Dont touch the above
*/