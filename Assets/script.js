const addEmployeesBtn = document.querySelector('#add-employees-btn');


const collectEmployees = function() {
  let employeesArray = [];
  let addEmployee = true;
  
  while (addEmployee){
    let firstName = window.prompt("Enter first name of employee:");
    let lastName = window.prompt("Enter last name of employee:");
    let salary = parseFloat(window.prompt("Enter salary of employee:")); 

    if (firstName && lastName && !isNaN(salary)) {
 
      //Object//
      let employee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary,
      };

      employeesArray.push(employee);

      addEmployee = window.confirm("Do you want to add another employee?");
    } 
    
    else {
      window.alert("Invalid input. Please enter valid information.");
    }
  }

  return employeesArray;
}

const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
  employeesArray.forEach(function (employee) {
    totalSalary += employee.salary;
  });

  let averageSalary = 0;
  if (employeesArray.length > 0) {
    averageSalary = totalSalary / employeesArray.length;
  }

  console.log(`Average Salary: ${averageSalary.toFixed(2)}`);
};


const getRandomEmployee = function (employeesArray) {

  if (employeesArray.length === 0) {
    console.log("No employees found.");
    return;
  }

 
  const randomIndex = Math.floor(Math.random() * employeesArray.length);


  const randomEmployee = employeesArray[randomIndex];


  console.log("Random Employee:");
  console.log(`First Name: ${randomEmployee.firstName}`);
  console.log(`Last Name: ${randomEmployee.lastName}`);
  console.log(`Salary: ${randomEmployee.salary}`);
};

// const employees = collectEmployees();
// displayAverageSalary(employees);
// getRandomEmployee(employees);




/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

