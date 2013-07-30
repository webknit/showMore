/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*//* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/function compare(e,t){t=Math.random();t<.34?t="rock":t<=.67?t="paper":t="scissors";playerChoice.innerHTML=e;computerChoice.innerHTML=t;if(e==t)return!1;if(e=="rock"){t=="scissors"?playerScore++:computerScore++;return updateScores()}if(e=="paper"){t=="rock"?playerScore++:computerScore++;return updateScores()}if(e=="scissors"){t=="rock"?computerScore++:playerScore++;return updateScores()}}function updateScores(){playerScoreBox.innerHTML=playerScore;computerScoreBox.innerHTML=computerScore}var computerScore=0,playerScore=0,playerScoreBox=document.getElementById("playerScore"),computerScoreBox=document.getElementById("computerScore");playerScoreBox.innerHTML=computerScore;computerScoreBox.innerHTML=playerScore;var playerChoice=document.getElementById("playerChoice"),computerChoice=document.getElementById("computerChoice");