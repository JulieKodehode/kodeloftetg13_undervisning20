/*
//OPPGAVE.1, While loop
1. Gå til linje utenfor kommentar og skriv av while loopen som er laget,
2. se på console.log hva som skjer
3. Vi går igjennom koden når alle har skrevet ferdig


KODE DERE SKAL SKRIVE AV:

let countdown = 5;

while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

console.log('Blast off!');
*/
// SKRIV UNDER HER

// Setter en variabel som er 5
let countdown = 5;

// Setter at så lenge 'countdown' er større enn 0 skal denne loopen skje
while (countdown > 0) {
  // Setter en template litteral string som setter at Countdown blir talt ned fra 5 som den orginalt sa og blir 0
  console.log(`Countdown: ${countdown}`);
  // Setter at for hver gang 'while loop' teller om variabel 'countdown' er mindre enn 0 så skal den ta countdown er countdown minus en
  countdown--;
}

// Setter en variabel som er 10
let countup = 0;

// Setter at så lenge 'countdown' er mindre enn 0 skal denne loopen skje
while (countup < 10) {
  // Setter en template litteral string som setter at 'countup' blir talt OPP fra 0 som den orginalt sa og blir 10
  console.log(`Countup: ${countup}`);
  // Setter at for hver gang 'for loop' teller om variabel 'countup' er større enn 0 så skal den ta 'countup' er 'countup' pluss en
  countup++;
}

console.log("Blast off!");

/*
//OPPGAVE.2, For loop
1. Gå til linje utenfor kommentar og skriv av for loopen, 
se på console.log hva som skjer
2. Vi går igjennom koden når alle har skrevet ferdig


KODE DERE SKAL SKRIVE AV:

const number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
*/
// SKRIV UNDER HER
// Setter en variabel som sier at 'number' er 7
const number = 7;

// Setter en 'for loop' som setter at variabelen 'i' er 0. Så lenge 'i' er mindre eller det samme som 10 så skal 'i' være 'i' pluss 1
for (let i = 1; i <= 10; i++) {
  // Setter en template litteral string som setter at 'number' skal ganges med 'i' og resultatet blir 'number' gange 'i'
  console.log(`${number} x ${i} = ${number * i}`);
}

/*
//OPPGAVE.3, forEach

1. Gå til linje utenfor kommentar og skriv av forEach loopen, 
se på console.log hva som skjer
2. Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL SKRIVE AV:

let shoppingList = ['milk', 'bread', 'fish', 'egg'];

shoppingList.forEach((item) => {
  console.log(item);
});
*/
// SKRIV UNDER HER
let shoppingList = ["Milk", "Bread", "Fish", "Egg"];

shoppingList.forEach((item) => {
  console.log(`Handlelisten inneholder: ${item}`);

  const displayShoppingList = document.querySelector("#shoppingList");
  const viewShoppingList = document.createElement("li");
  viewShoppingList.textContent = item;

  displayShoppingList.appendChild(viewShoppingList);
});

/*
//OPPGAVE.4, map

1.Gå til linje utenfor kommentar og skriv av map funksjonen som er laget
2. se på console.log hva som skjer
3. Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL SKRIVE AV:

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
console.log(numbers);
*/
// SKRIV UNDER HER
const numbers = [1, 2, 3];
console.log(numbers);

const doubled = numbers.map((number) => number * 2);
console.log(doubled);

const triple = numbers.map((number) => number * 3);
console.log(triple);
