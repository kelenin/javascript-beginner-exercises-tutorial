var total = prompt('How many km are left to go?');

// Your code below:
if(total>100)
{
    //var total = prompt('We still have a bit of driving left to go?');
    consolo.log("We still have a bit of driving left to go?");
}
else if(total>50)
{
    //consolo.log("We'll be there in 5 minutes");
    //var total = prompt("We'll be there in 5 minutes?");
    consolo.log("We still have a bit of driving left to go?");
}
else if(total<=50)
{
    var total = prompt("I'm parking, I see you right now?");
    consolo.log("I'm parking, I see you right now");

}