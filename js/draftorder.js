//A closure lets you associate some data (the environment) with a function that operates on that data.

var draftOrder = function(){
	
	var btnClick = document.getElementById("buttonCount"),
		btnHighligt = document.getElementById("buttonHighlight"),
		displayArea = document.getElementById("displayarea"),
		displayerror = document.getElementById("displayerror"),
		team = 0,
		output = '';
		
	btnClick.addEventListener('click', function(){
		
		var position = document.getElementById("positionNumber").value,
			count = 1;
		
		team = parseInt( document.getElementById("teamNumber").value );
		output = '';
		displayerror.innerHTML = '';
		
		output += '<table border="1">'
		for(var i = 1; i <= position; i++){
			var reverseCounter = 0;
			output += '<tr>'
			output += '<td style="background-color:#696969">R ' + i + '</td>';
			
			for(var j = count; j <= team * i; j++){
				output += '<td>';
				
				if( i % 2 != 0 ){
					output += j;
				} else {
					output += (( team * i ) -  reverseCounter );
					reverseCounter++
				}
				
				output += '</td>';
			}
			
			output += '</tr>';
			count = (team * i ) + 1;
		}
		output += '</table>'
		
		displayArea.innerHTML = output;
		
	});
	
	btnHighligt.addEventListener('click', function(){
		var draftPos = parseInt( document.getElementById("positionHighlight").value ),
			tablePos = document.getElementsByTagName("td"),
			staticPos = 0;
			
			displayerror.innerHTML = '';
			
		if( tablePos.length > 0 ){
			if( team >= draftPos ){
				for(var i = 0; i < tablePos.length; i++ ){
					tablePos[i].setAttribute("style", "background-color:none");
					
					if( i == draftPos ){
						tablePos[i].setAttribute("style", "background-color:#A9A9A9");
						draftPos += ( team + 1 );
					}
					
					if( i == staticPos ){
						tablePos[i].setAttribute("style", "background-color:#696969");
						staticPos += ( team + 1 );
					}
					
				};
			} else {
				displayerror.innerHTML = "<span class='errormsg'>There are only " + team + " teams</span>" ;
			}
		} else {
			displayerror.innerHTML = "<span class='errormsg'>Pelase Generate the table first</span>";
		}
		
	});
}

draftOrder();