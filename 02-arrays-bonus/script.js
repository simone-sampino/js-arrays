const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers;

for (let i = 0; i < teachers.length; i++) {
  const element = teachers[i];

  if (element.length >= 5) {
    console.log(element);
  } else {
    console.log();
  }
}

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5, 1); // ora Ed è al quinto posto perchè l'ordine degli insegnanti è stato invertito nel primo esercizio
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers;
  
  if (teachers.indexOf('Fabio') === 4) {
    console.log('Fabio è presente!');
  } else {
    console.log('Fabio è assente!');
  }

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;