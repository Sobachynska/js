const employees = [
    { id: 1, name: "Дмитро", age: 23, salary: 400 },
    { id: 2, name: "Петро", age: 25, salary: 500 },
    { id: 3, name: "Василь", age: 23, salary: 500 },
    { id: 4, name: "Микола", age: 30, salary: 1000 },
    { id: 5, name: "Іван", age: 27, salary: 500 },
    { id: 6, name: "Гнат", age: 28, salary: 1000 },
];

// Отримуємо доступ до елементу HTML, в який будемо виводити таблицю
const table = document.getElementById("table");

// Створюємо заголовок таблиці
const headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>id</th><th>name</th><th>age</th><th>salary</th>";
table.appendChild(headerRow);

// Циклом проходимося по масиву об'єктів та додаємо рядки таблиці
for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const row = document.createElement("tr");
    row.innerHTML = `<td>${employee.id}</td><td>${employee.name}</td><td>${employee.age}</td><td>${employee.salary}</td>`;
    table.appendChild(row);
}