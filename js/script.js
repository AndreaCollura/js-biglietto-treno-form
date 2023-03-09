
// VARIABILI


const genBox = document.getElementById('genbox');

const nameImp = document.querySelector('input[name="name"]');

const kmImp = document.querySelector('input[name="km"]');

const ageImp = document.querySelector('input[name="age"]');

const buttonCal = document.getElementById('btncal');

const buttonNew = document.getElementById('btnnew');

const totPrice = document.querySelector('.totprice');

const discountType = document.querySelector('.discount');

const ticketBox = document.querySelector('.ticket-box');

const passName = document.querySelector('.pass-name');

const rndNumber = document.querySelector('.rndnum');

const juniorSale = 0.20;

const seniorSale = 0.40;

const kmPrice = 0.21; 




// funzioni

buttonCal.addEventListener('click', function () {

    let km = kmImp.value;

    let age = ageImp.value; 

    let price = (km * kmPrice) ; 

    let randomNum = getRndNumber(500,99999);

    passName.innerHTML = `<p> ${nameImp.value}</p>`;

    ticketBox.classList.remove('d-none');



    switch (true) {
        case (age < 18 && age > 0):
            finalPrice = (price - (price * juniorSale)).toFixed(2);
            discountType.innerHTML = `<p>Sconto Junior</p>`;
            totPrice.style.color = 'green';
            discountType.style.color = 'green';
            rndNumber.innerHTML = `<p>${randomNum}</p>`;
            totPrice.innerHTML = `<p>${finalPrice}€</p>`;
            break;

        case (age >= 65):
            finalPrice = (price - (price * seniorSale)).toFixed(2);
            discountType.innerHTML = `<p>Sconto Senior</p>`;
            discountType.style.color = 'green';
            totPrice.style.color = 'green';
            rndNumber.innerHTML = `<p>${randomNum}</p>`;
            totPrice.innerHTML = `<p>${finalPrice}€</p>`;
            break;
        
        default : 
            
            finalPrice = price.toFixed(2);
            discountType.innerHTML = `<p>Nessuno Sconto</p>`;
            rndNumber.innerHTML = `<p>${randomNum}</p>`;
            totPrice.innerHTML = `<p>${finalPrice}€</p>`;

    }


    buttonNew.addEventListener('click', function(){

        kmImp.value = '';
        ageImp.value = '';
        nameImp.value = '';
        ticketBox.classList.add('d-none');



    })
   

    console.log(finalPrice);






});