/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/


$(function()
{
	'use strict';

	var blocks = $('.blocks');
	var showMoreBlocks = $('.show-more');
	var showLessBlocks = $('.show-less');
	
	// How many you want to show at start
	var showAtStart = 4;
	
	// How many you want add/remove on click
	var showMore = 4;
	
	// Take one off 
	var showAtStartCalculate = showAtStart - 1;
	
	// Get the length of the items
	var length = blocks.find('li').length;

	// Hide them at the start
	$('.blocks li:gt(' + showAtStartCalculate + ')').fadeOut('1000');
	
	// If we have more than one row we bring out the show more button
	if (blocks.find('li').length > showAtStart) {
		showLessBlocks.hide();
		showMoreBlocks.show(); 
	}
	
	// Function to show more
	function moreBlocks(){
		console.log('length =' + length);
		$('.blocks li:hidden:lt(' + showMore + ')').fadeIn('1000');
		length = length - showMore;
		
		// Hit the end of the list & switch buttons
		if (length <= showAtStart) {
			console.log('Youve hit the end of the list');
			showMoreBlocks.hide();
			showLessBlocks.show();
			length = blocks.find('li').length;
		}

	};
	
	// Function to show less
	function lessBlocks(){
		console.log(length);
		$($('.blocks li:visible').get().reverse()).filter(':lt(' + showMore + ')').fadeOut('1000');
		length = length - showMore;
		
		// Hit the start of the list and switch buttons
		if (length <= showAtStart) {
			console.log('Youve hit the start of the list');
			showMoreBlocks.show();
			showLessBlocks.hide();
			length = blocks.find('li').length;
		}
		
	};

	// On click events
	showMoreBlocks.click(moreBlocks);
	showLessBlocks.click(lessBlocks);
	
});

