const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

buttons.forEach(function(button) {
	button.addEventListener('click', calc);
});

function calc(event) {
 	const clicked = event.target.innerText;
  	
	if(clicked === '=') {
		if(display.innerText !== '') {
	  	display.innerText = eval(display.innerText);
		}
  	} 
	
  	else if(clicked === 'C') {
		display.innerText = "";
  	}
	 
	else if(clicked === "←"){
		let temp = display.innerText;
		console.log(temp.slice(0,temp.length-1));
		display.innerText = temp.slice(0,temp.length-1);
	}

  	else{
		display.innerText += clicked;
  	}
}