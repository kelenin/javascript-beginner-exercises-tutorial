
let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if(guests==20)
    {
        cost=4000;
    }
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost $ '+price+' dollars');
