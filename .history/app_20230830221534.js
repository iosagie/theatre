const generalAdmissionTicketCost = 20;
const childAndSeniorTicketCost = 10;

function buyTicket() {
    const age = prompt('What is your age?');
    let cost = generalAdmissionTicketCost;
    if (age <= 12 || (age >= 65)) {
        cost = childAndSeniorTicketCost;
    }
    alert('Your ticket will cost: $' )
}