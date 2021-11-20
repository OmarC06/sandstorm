var playerx = 3;
var playery = 5;

var obstaclex = 20;
var obstacley = 5;

var ground1 = 6;
var ground2 = 7;

var sunx = Math.floor(Math.random() * 20) + 1; 
var suny = Math.floor(Math.random() * 3) + 1;

var score = 0;

//var obstaclex2 = 20;
//var obstacley2 = 8;

function gamegenerater()
{
	var gameBoard = document.createElement('table');
  

  for(i=1; i < 8; i++)
  {
    var tableRow = document.createElement('tr');

    for(j=1; j < 21; j++)
    {
      var tableCell = document.createElement('td');
      tableCell.setAttribute("id","cell"+j+'-'+i);
      tableCell.setAttribute("class","board_cell");
      tableRow.appendChild(tableCell);

    }
    
    if(i == 9)
    {
      tableRow.setAttribute('style','border-bottom:1px blue');
    }

    gameBoard.appendChild(tableRow);
  }

  document.getElementById('gameborders').appendChild(gameBoard);

  document.getElementById('cell'+playerx+'-'+playery).classList.add('Player');
  document.getElementById('cell'+sunx+'-'+suny).classList.add('sun');
  

  for(k=1; k < 21; k++)
    {document.getElementById('cell'+k+'-'+ground1).classList.add('ground');
    document.getElementById('cell'+k+'-'+ground2).classList.add('ground');}

  if(obstaclex==playerx&&obstacley==playery) {endgame();}

  obstacle();
}

function jump()
{
	document.getElementById("b").disabled = true;
	document.getElementById("b").style.backgroundColor = "lightgreen";
	document.getElementById('cell'+playerx+'-'+playery).classList.remove('Player');
	playery = 4;
	document.getElementById('cell'+playerx+'-'+playery).classList.add('Player');

	setTimeout(function(){ 
		document.getElementById('cell'+playerx+'-'+playery).classList.remove('Player');
		playery = 5;
		document.getElementById('cell'+playerx+'-'+playery).classList.add('Player');
		document.getElementById("b").disabled = false;
		document.getElementById("b").style.backgroundColor = "#4ed62f"
	}, 400);
}

function obstacle()
{
	document.getElementById('cell'+obstaclex+'-'+obstacley).classList.add('obstacle');
	var move = setInterval(function(){ 
	document.getElementById('cell'+obstaclex+'-'+obstacley).classList.remove('obstacle');
	obstaclex = obstaclex - 1;
	document.getElementById('cell'+obstaclex+'-'+obstacley).classList.add('obstacle');
	if (obstaclex == 1) {
		document.getElementById('cell'+obstaclex+'-'+obstacley).classList.remove('obstacle');
		obstaclex = obstaclex + 19;
		document.getElementById('cell'+obstaclex+'-'+obstacley).classList.add('obstacle');
	};
	if (obstaclex==playerx&&obstacley==playery) {endgame();} else {score = score + 1; document.getElementById("Score").innerHTML = "Score: " + score;}
    }, 200);

}

function endgame()
{
	alert("Game over. Your score was " + score + '.');
	document.getElementById('cell'+obstaclex+'-'+obstacley).classList.remove('obstacle');
	obstaclex = 20;
	document.getElementById('cell'+obstaclex+'-'+obstacley).classList.add('obstacle');
	location.reload();
}