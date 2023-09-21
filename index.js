function checkEligibility(){
    let age = 18;
    let member = "yes";
    let heading = document.querySelector('h1');

    if(age >= 65) {
        console.log('Eligible for Senior Discount!😊');
    } else if (age >= 18 && member === "yes"){
        heading.innerHTML = 'Eligible for Member Discount!😊';
    } else {heading.innerHTML = 'You are not eligible for a discount 🙁.';}
        
} 

let eligibility = document.querySelector('button');
eligibility.addEventListener("click", checkEligibility );
