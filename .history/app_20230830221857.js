const generalAdmissionTicketCost = 20;
const childAndSeniorTicketCost = 10;

function buyTicket() {
    const age = prompt('What is your age?');
    let cost = generalAdmissionTicketCost;
   
    alert('Your ticket will cost: $' + cost);
}

function getBaseTicketCost(age) {
    if (age <= 12 || (age >= 65)) {
        r = childAndSeniorTicketCost;
    }
}