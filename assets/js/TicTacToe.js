// agr koi box marked hy to us k uper mark na hooo
// jb 4 moves ho chuki hain to 5th move sy test suru krna hy

var box = document.querySelectorAll("td");
var info = document.querySelector("#info");
var move =1;

	info.textContent="Player One Move";

	for(var i=1; i<=9; i++)
	{
		box[i].addEventListener("click",placeMark);
	}
	function placeMark()
	{

	//**************************  Total moves are 9   **************************//   
	//Divide 9 moves between two players (first move for player 1 and second for palyer 2 and so on...)
		if(move<=9)
		{
			if(move==1 || move%2!=0)
			{
				// player 1 move , place tic

			//******************  Check if already marked the do nothing   ********************//
				if(this.innerHTML.length!==0)
				{
					//if already marked
					window.alert("Box is already marked");
					return;
				}
				else
				{
					//****************** after inserting mark also check user wins of not   ********************//
						this.innerHTML = "<img src='pictures\\tic.png'>"; 
						if(testWinner()===true)
						{
							info.textContent="....Player One Winner....";
							move=10;
							return;
						}
						else
						{
							move++;
							// check match draw or not
							if(move>9)
							{
								info.textContent= "..GameDraw..";	
								return;
							}
							else
							{
								info.textContent= "Player Two Move";
								return;		
							}
						}
				}
			}
			else
			{
				// player 2 move
				//******************  Check if already marked the do nothing   ********************//
				if(this.innerHTML.length!==0)
				{
					//if already marked
					window.alert("Box is already marked");
					return;
				}
				else
				{
				//******************  after inserting mark check user wins of not   ********************//
						this.innerHTML = "<img src='pictures\\cross.png'>";
						if(testWinner()===true)
						{
							info.textContent="....Player Two Winner....";
							move=10;
							return;
						}
						else
						{
							move++;
							info.textContent="Player One Move"; 
							return;		
						}
				}
			}						
		}
		else
		{
			return;
		}
	
	}
	





	//******************  Code for text win or not   ********************//
	//    there are total 8 case to win are are in if condition
function testWinner()
{
	if
	(
		(box[1].innerHTML===box[2].innerHTML)&&(box[2].innerHTML===box[3].innerHTML) &&(box[1].innerHTML.length!==0) &&(box[2].innerHTML.length!==0) &&(box[3].innerHTML.length!==0) ||
		(box[4].innerHTML===box[5].innerHTML)&&(box[5].innerHTML===box[6].innerHTML) &&(box[4].innerHTML.length!==0) &&(box[5].innerHTML.length!==0) &&(box[6].innerHTML.length!==0) ||
		(box[7].innerHTML===box[8].innerHTML)&&(box[8].innerHTML===box[9].innerHTML) &&(box[7].innerHTML.length!==0) &&(box[8].innerHTML.length!==0) &&(box[9].innerHTML.length!==0) ||
		(box[1].innerHTML===box[4].innerHTML)&&(box[4].innerHTML===box[7].innerHTML) &&(box[1].innerHTML.length!==0) &&(box[4].innerHTML.length!==0) &&(box[7].innerHTML.length!==0) ||
		(box[2].innerHTML===box[5].innerHTML)&&(box[5].innerHTML===box[8].innerHTML) &&(box[2].innerHTML.length!==0) &&(box[5].innerHTML.length!==0) &&(box[8].innerHTML.length!==0) ||
		(box[3].innerHTML===box[6].innerHTML)&&(box[6].innerHTML===box[9].innerHTML) &&(box[3].innerHTML.length!==0) &&(box[6].innerHTML.length!==0) &&(box[9].innerHTML.length!==0) ||
		(box[1].innerHTML===box[5].innerHTML)&&(box[5].innerHTML===box[9].innerHTML) &&(box[1].innerHTML.length!==0) &&(box[5].innerHTML.length!==0) &&(box[9].innerHTML.length!==0) ||
		(box[3].innerHTML===box[5].innerHTML)&&(box[5].innerHTML===box[7].innerHTML) &&(box[3].innerHTML.length!==0) &&(box[5].innerHTML.length!==0) &&(box[7].innerHTML.length!==0) 
	)
	{
		return true;
	}
	else
	{
		return false;
	}
}

