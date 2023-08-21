# Tip Calculator Web App

This is a simple web application that calculates the total tip amount based on the total spent and the quality of service. Users can input the number of people, total spent, and service quality to calculate the appropriate tip for the group.

## Features

- Calculate the total tip amount for a group of people.
- Adjust the tip based on the quality of service.
- Receive the calculated tip amount per person.
- Supports single-person calculations.

## Getting Started

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser to use the application.

## Usage

1. Input the number of people (`amount-people`), the total spent (`total-spent`), and the quality of service (`quality-of-service`).
2. Submit the form to calculate the total tip amount and the tip per person.
3. View the calculated tip information displayed below the form.

## Tip Calculation

The tip is calculated based on the following formula:
Total Tip = (Total Spent / Number of People) * Quality of Service

## Limitations

- This tip calculator assumes a uniform tip distribution among the group members.
- The application only provides basic tip calculation functionality.

## Code Overview

- The tip calculation logic is implemented using JavaScript and HTML form elements.
- The form input values are retrieved and processed to calculate the tip.
- The calculated tip amount is displayed on the web page.

## Dependencies

No external libraries or frameworks are required. The application uses standard web technologies.

## Notes

- This application is intended for educational purposes and may not include advanced features present in commercial tip calculator applications.
