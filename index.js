function checkEligibility(event){
    event.preventDefault();
    let age = document.getElementById("age").value;
    let member = document.querySelector('input[name="member"]:checked').value;
    let heading = document.querySelector('h1');

    if(age >= 65) {
        heading.innerHTML = 'You Are Eligible For Senior Discount!😊'; 
    } else if (age >= 18 && member === 'yes'){
        heading.innerHTML = 'You Are Eligible For Member Discount!😊';
    } else {heading.innerHTML = 'Sorry! You are not eligible for a discount 🙁.';}
        
} 

let eligibility = document.getElementById('CheckEligibility');
eligibility.addEventListener("click", checkEligibility);
