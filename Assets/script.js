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

//function to display average salary//
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
//forEach method used to iterate over each element in the employeesArray
  employeesArray.forEach(function (employee) {
    //accumulates the salary of each employee//
    totalSalary += employee.salary;
  });

  //if the length of the employeesArray is greater than 0 then the average salary will be calculated by dividing the sum of all salaries in the employeesArray by number of employees//
  let averageSalary = 0;
  if (employeesArray.length > 0) {
    averageSalary = totalSalary / employeesArray.length;
  }
  
  //prints average salary to the console with the averageSalary variable fixed to 2 decimal points//
  console.log(`Average Salary: ${averageSalary.toFixed(2)}`);
};

//function to choose random eomployee using callback function employeesArray//
const getRandomEmployee = function (employeesArray) {

  //if the length of the employeesArray is equal to 0 then it will print in the console the text string//
  if (employeesArray.length === 0) {
    console.log("No employees found.");
    return;
  }

 //accesses a random element from the employeesArray. Math.random will generate a floating point number between 0 and 1, and Math.floor will round it down to a whole number
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

//accesses the generated value from randomIndex in the employeesArray
  const randomEmployee = employeesArray[randomIndex];


  //logs to the console chosen random employee details
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

