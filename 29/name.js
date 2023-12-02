const firstName = 'Ирина';
const lastName = 'Гуменюк';
const middleName = 'Алксандровна';
const birthYear = 2003;
const institut = 'Прикладная информатика ИКИТ';

const result1 =
  'Имя: ' + firstName + '\n' +
  'Фамилия: ' + lastName + '\n' +
  'Отчество: ' + middleName + '\n' +
  'Год рождения: ' + birthYear + '\n' +
  'Направление в институте: ' + institut;

const result2 = `
Имя: ${firstName}
Фамилия: ${lastName}
Отчество: ${middleName}
Год рождения: ${birthYear}
Направление в институте: ${institut}
`;

console.log(result1);
console.log(result2);