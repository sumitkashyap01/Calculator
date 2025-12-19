# Calculator
🧮 Retro Pixel Calculator
A fully functional, web-based calculator built with vanilla JavaScript, HTML, and CSS. This project focuses on DOM manipulation, event handling, and mathematical logic.

🚀 Live Demo
[Insert your GitHub Pages link here]

✨ Features
Basic Arithmetic: Supports addition, subtraction, multiplication, and division.

Decimal Support: Handles floating-point numbers accurately.

Pixel-Perfect Design: Styled with Google Fonts ("Pixelify Sans") for a retro look.

Dynamic UI: Responsive buttons with hover and active states.

Clear Functionality: Quickly reset all calculations with the 'CLEAR' button.

🛠️ Built With
HTML5 - Structure and semantic layout.

CSS3 - Custom styling and Flexbox layout.

JavaScript (ES6) - Logic, event listeners, and math operations.

🧠 Key Logic Explained
The calculator uses a state machine logic to track:

Number 1: The first value entered.

Operator: The math function chosen (+, -, x, /).

Number 2: The second value entered.

Once the equal button is pressed, the strings are converted to Numbers and passed through an operation() function to return the final result.
