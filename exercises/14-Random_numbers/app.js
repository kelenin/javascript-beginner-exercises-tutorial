/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
	var randomNumber = Math.floor((Math.random()* 10)+1);
	//let x = Math.floor(Math.random() * 10);
    //return x;
	return randomNumber;
}


console.log(getRandomInt());