# SpendWise

SpendWise is a simple budgeting application that helps users track their budget and expenses.

## Week 6 Improvements

This week, I made SpendWise interactive using JavaScript.

The application can now:

- Store multiple expenses.
- Add new expenses through a form.
- Calculate total expenses.
- Calculate the remaining balance.
- Display expenses directly on the webpage.
- Give feedback based on the user's budget.
- Respond to user actions using event listeners.

## 1. Conditional Statements

I used `if`, `else if`, and `else` statements to make decisions about the user's budget.

For example:

- If the balance is below zero, the application tells the user that they have exceeded their budget.
- If the balance is KSh 1,000 or less, it warns the user that their balance is low.
- Otherwise, it tells the user that they are within their budget.

## 2. Arrays

I used an array called `expenses` to store multiple expense records.

Each expense contains:

- Expense name
- Expense amount

Example:

```javascript
let expenses = [
    {
        name: "Lunch",
        amount: 300
    },
    {
        name: "Transport",
        amount: 500
    }
];

Using an array makes it possible to store and manage many expenses.

3. Loops

I used a for loop to go through the expenses array.

The loop is used to:

Calculate the total amount spent.
Display each expense on the webpage.

This allows the application to process multiple expense records efficiently.

4. DOM Manipulation

I used JavaScript DOM manipulation to update the webpage.

For example:

document.getElementById("totalExpenses");

I also used textContent to display the budget, total expenses, balance, and budget messages directly on the webpage.

The application also uses createElement() and appendChild() to create and display expense records.

5. Events and User Interactions

I used addEventListener() to respond to the user's form submission.

When the user enters an expense and clicks the "Add Expense" button:

JavaScript detects the form submission.
The page refresh is prevented.
The expense information is collected.
The expense is added to the array.
The dashboard is updated.
The form is cleared.
6. Challenges and Solutions

One challenge was understanding how JavaScript connects with HTML elements.

I solved this by using getElementById() to select HTML elements and textContent to update their content.

Another challenge was calculating the total of multiple expenses.

I solved this by storing the expenses in an array and using a for loop to calculate the total.

I also learned how addEventListener() allows the application to respond to user actions without refreshing the webpage.

Conclusion

This week's project helped me understand how JavaScript can make a webpage interactive.

SpendWise now demonstrates:

Conditional statements
Arrays
Loops
Functions
DOM manipulation
Event listeners
User input
Dynamic webpage updates
# SpendWise – Personal Budget Tracker

## Project Description
SpendWise is a simple and user-friendly personal budget tracking web application designed to help users manage their expenses, organize spending categories, and monitor their financial activities.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- GitHub
- Netlify

## GitHub Repository Information
**Repository Name:** SpendWise

**GitHub Repository:** [Insert your public GitHub repository link]

## Live Website
**Netlify URL:** [Insert your live Netlify website URL]

## Deployment Process Summary
1. Organized and prepared all SpendWise project files.
2. Created a public GitHub repository.
3. Uploaded the project files to GitHub.
4. Connected the GitHub repository to Netlify.
5. Configured Netlify to publish the website from the root directory.
6. Customized the Netlify website name.
7. Tested the live website.
8. Updated the project on GitHub and confirmed automatic deployment through Netlify.

## Challenges Encountered During Deployment
Some possible challenges included understanding the GitHub repository setup, configuring Netlify publishing settings, and ensuring that all website files were correctly linked.

*Edit this section to reflect the actual challenges you encountered.*

## Lessons Learned
- How to create and manage public GitHub repositories.
- How to deploy websites using Netlify.
- How continuous deployment works.
- How to update a live website through GitHub.
- The importance of testing website functionality after deployment.

## Author
Mohamed Yacub Musa
