const generalAdmissionTicketCost = 20;
const childAndSeniorTicketCost = 10;
const matineeDiscount = 3;

function buyTicket() {
  const age = prompt('What is your age?');
  let cost = getBaseTicketCost(age);

}

function getBaseTicketCost(age) {
  if (age <= 12 || age >= 65) {
    return childAndSeniorTicketCost;
  }
  return generalAdmissionTicketCost;
}

function isMatineeDiscount() {

  const isMatinee = prompt('Are you attending a matinee show?');
  

    if((isMatinee === 'yes') || (isMatinee === 'y')) {
    cost = cost - matineeDiscount;
  }
}