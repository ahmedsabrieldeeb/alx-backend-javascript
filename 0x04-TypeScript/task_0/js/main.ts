interface Student {
  [key: string]: string | number;
  
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: "Ahmed",
  lastName: "Eldeen",
  age: 23,
  location: "Egypt"
}

const secondStudent: Student = {
  firstName: "Rania",
  lastName: "Shazok",
  age: 20,
  location: "Morroco",
}

const students = [
  firstStudent,
  secondStudent
]

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

const trow = document.createElement('tr');
['First Name', 'Location'].forEach(data => {
  const th = document.createElement('th');
  th.appendChild(document.createTextNode(data));
  trow.appendChild(th);
});

thead.appendChild(trow);
table.appendChild(thead);

students.forEach(student => {
  const row = document.createElement('tr');
  ['firstName', 'location'].forEach(key => {
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(student[key] as string));
    row.appendChild(td);
  });
  tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);
