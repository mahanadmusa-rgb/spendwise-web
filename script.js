// SpendWise Budget 
let budget = 5000; 
// Array used to store multiple expense records let expenses = [ 
    { 
        name: "Lunch", 
        amount: 300 
    }, 
    { 
        name: "Transport", 
        amount: 500 
    } 
];
// Select HTML elements using their IDs 
const expenseForm = document.getElementById("expenseForm"); 
const expenseName = document.getElementById("expenseName"); 
const expenseAmount = document.getElementById("expenseAmount");

const expenseList = document.getElementById("expenseList"); 
const totalExpensesElement = document.getElementById("totalExpenses"); 
const budgetElement = document.getElementById("budget"); 
const balanceElement = document.getElementById("balance"); 
const message = document.getElementById("message"); 
const budgetMessage = document.getElementById("budgetMessage");

// Function to calculate total expenses 
function calculateTotal() { 
    let total = 0;

    // Loop through the expense array 
    for (let i = 0; i < expenses.length; i++) { 
        total += expenses[i].amount; 
    }
    return total; 
}
// Function to update the dashboard 
function updateDashboard() { 
    let total = calculateTotal(); 
    let balance = budget - total;

    // Update information on the webpage 
    budgetElement.textContent = `KSh ${budget}`; 
    totalExpensesElement.textContent = `KSh ${total}`; 
    balanceElement.textContent = `KSh ${balance}`; 
    // Clear the current list 
    expenseList.innerHTML = "";

    // Loop through expenses and display them 
    for (let i = 0; i < expenses.length; i++) { 
        let listItem = document.createElement("li"); 
        listItem.textContent = 
        `${expenses[i].name}: KSh ${expenses[i].amount}`; 
        expenseList.appendChild(listItem); 
    }
    // Conditional statements for budget feedback 
    if (balance < 0) { 
        budgetMessage.textContent = 
        "You have exceeded your budget."; 
    } else if (balance <= 1000) { 
        budgetMessage.textContent = 
        "Warning: Your remaining balance is low."; 
    } else { 
        budgetMessage.textContent = 
        "You are within your budget."; 
    } 
}
// Event listener for the expense form 
expenseForm.addEventListener("submit", function(event) { 
    // Prevent the page from refreshing 
    event.preventDefault(); 
    let name = expenseName.value; 
    let amount = Number(expenseAmount.value); 
    // Check if the amount is valid 
    if (amount <= 0) { 
        message.textContent = 
        "Please enter a valid expense amount."; 
        return; 
    }
    // Add a new expense to the array 
    expenses.push({ name: 
        name, amount: 
        amount 
    }); 

        // Display success message 
        message.textContent = 
        "Expense added successfully!"; 
        // Update dashboard 
        updateDashboard(); 
        // Clear the form 
        expenseForm.reset(); 
    }); 
    // Display the initial dashboard 
    updateDashboard();



