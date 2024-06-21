const addEmployeesBtn = document.querySelector('#add-employees-btn');

//collectEmployees function, includes empty 'employeesArray' array and 'addEmployee' boolean varibale//
const collectEmployees = function() {
  let employeesArray = [];
  let addEmployee = true;
  
  //while loop that will continue as long as 'addEmployee is true//
  while (addEmployee){
    //prompts user to add details in window box//
    let firstName = window.prompt("Enter first name of employee:");
    let lastName = window.prompt("Enter last name of employee:");
    //parsefloat is used to convert a string number into a number with decimal places//
    let salary = parseFloat(window.prompt("Enter salary of employee:")); 

    //checks is firstName and lastName are truthy, and makes sure salary is a valid number using !isNaN(salary)//
    if (firstName && lastName && !isNaN(salary)) {
 
      //employee object//
      let employee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary,
      };

      //adds employee object to the employees array//
      employeesArray.push(employee);

      //asks if user wants to add another employee, if not the loop is now false and ends//
      addEmployee = window.confirm("Do you want to add another employee?");
    } 
    
    //if any of the inputs are missing or invalid the window will display the string message//
    else {
      window.alert("Invalid input. Please enter valid information.");
    }
  }

  //ends the function and returns the employeesArray to the caller//
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

