
// VARIABILI


const genBox = document.getElementById('genbox');

const nameImp = document.querySelector('input[name="name"]');

const kmImp = document.querySelector('input[name="km"]');

const ageImp = document.querySelector('input[name="age"]');

const buttonCal = document.getElementById('btncal');

const buttonNew = document.getElementById('btnnew');

const ticketFinal = document.querySelector('ticketfinal');

const juniorSale = 0.20;

const seniorSale = 0.40;

const kmPrice = 0.21; 




// funzioni

buttonCal.addEventListener('click', function () {

    let km = kmImp.value;

    let age = ageImp.value; 

    let price = (km * kmPrice) ; 

    switch (true) {
        case (age < 18):
            finalPrice = (price - (price * juniorSale)).toFixed(2);
            break;

        case (age >= 65):
            finalPrice = (price - (price * seniorSale)).toFixed(2);
            break;
        
        default : 
            
            finalPrice = price;
            
    }
   

    console.log(finalPrice);






});