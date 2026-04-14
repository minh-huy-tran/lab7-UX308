let currentState = welcoming;
let context = {};

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
  context = {};
}

function welcoming() {
  let aReturn = [];
  currentState = askReady;
  aReturn.push("Welcome to BubbleJoy!");
  aReturn.push("Are you ready to order?");
  return aReturn;
}

function askReady(sInput) {
  let aReturn = [];
  if (!sInput || sInput.trim() === "") {
    aReturn.push("Are you ready to order? (Yes / No)");
    return aReturn;
  }
  const t = sInput.toLowerCase().trim();
  if (t.startsWith('y')) {
    currentState = askDrinkType;
    aReturn.push("Great!");
    aReturn.push("Would you like Milk Tea or Bubble Tea?");
  } else {
    currentState = welcoming;
    aReturn.push("No problem — come back anytime!");
  }
  return aReturn;
}

function askDrinkType(sInput) {
  let aReturn = [];
  const t = sInput.toLowerCase().trim();
  if (t.includes('milk')) {
    context.drinkType = 'Milk Tea';
    currentState = askSize;
    aReturn.push("Milk Tea it is!");
    aReturn.push("What size? Small, Medium, or Large?");
  } else if (t.includes('bubble')) {
    context.drinkType = 'Bubble Tea';
    currentState = askSize;
    aReturn.push("Bubble Tea it is!");
    aReturn.push("What size? Small, Medium, or Large?");
  } else {
    aReturn.push("Please choose Milk Tea or Bubble Tea.");
  }
  return aReturn;
}

function askSize(sInput) {
  let aReturn = [];
  const t = sInput.toLowerCase().trim();
  const sizes = ['small', 'medium', 'large'];
  const match = sizes.find(s => t.includes(s));
  if (match) {
    context.size = match.charAt(0).toUpperCase() + match.slice(1);
    currentState = askTopping;
    aReturn.push(`${context.size} ${context.drinkType} — nice choice!`);
    aReturn.push("Any toppings? Tapioca, Jelly, or None?");
  } else {
    aReturn.push("Please choose Small, Medium, or Large.");
  }
  return aReturn;
}

function askTopping(sInput) {
  let aReturn = [];
  const t = sInput.toLowerCase().trim();
  if (t.includes('tapioca')) {
    context.topping = 'Tapioca';
  } else if (t.includes('jelly')) {
    context.topping = 'Jelly';
  } else {
    context.topping = 'None';
  }
  currentState = confirmOrder;
  aReturn.push("Would you like to add a cookie? (Yes / No)");
  return aReturn;
}

function confirmOrder(sInput) {
  let aReturn = [];
  const t = sInput.toLowerCase().trim();
  context.addonCookie = t.startsWith('y');
  currentState = welcoming;
  aReturn.push("--- Your Order ---");
  aReturn.push(`${context.size} ${context.drinkType}`);
  aReturn.push(`Topping: ${context.topping}`);
  aReturn.push(`Cookie add-on: ${context.addonCookie ? 'Yes' : 'No'}`);
  aReturn.push("Thanks for ordering at BubbleJoy!");
  return aReturn;
}
