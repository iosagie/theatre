const generalAdmissionTicketCost = 20;
const childAndSeniorTicketCost = 10;
const matineeDiscount = 3;

function buyTicket() {
  const age = prompt('What is your age?');
  let cost = getBaseTicketCost(age);

  const isMatinee = prompt('Are you attending a matinee show?');

  cost = applyMatineeDiscount(cost, isMatinee);
  alert('Your ticket will cost: $' + cost).toLower;
}

function getBaseTicketCost(age) {
  if (age <= 12 || age >= 65) {
    return childAndSeniorTicketCost;
  }
  return generalAdmissionTicketCost;
}

function applyMatineeDiscount(cost, isMatinee) {
  if (isMatinee === 'yes' || isMatinee === 'y') {
    return cost - matineeDiscount;
  }
  return cost;
}
