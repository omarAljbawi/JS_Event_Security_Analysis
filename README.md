## JS_Event_Security_Analysis

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>    
    <li><a href="#features">Features</a></li>    
    <li><a href="#description">Description</a></li>
    <li><a href="#project-structure">Project Structure</a></li>    
    <li><a href="#files">Files</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>  
    <li><a href="#running-the-server">Running the Server</a></li>    
    <li><a href="#usage-instructions">Usage Instructions</a></li>  
    <li><a href="#expected-results">Expected Results</a></li>
  </ol>
</details>



<!-- DESCRIPTION -->
## Description

This project is a simple Node.js web server that serves an HTML page with a form. The form allows users to input their first name, last name, and select their age from a dropdown menu. The server handles serving static files, including HTML, CSS, and JavaScript.



<!-- FEATURES -->
## Features

- **Form Inputs**: Users can enter their first name and last name.
- **Age Selector**: A dropdown menu to select age, which updates a read-only field.
- **Button Click Alert**: An alert box is shown when the "SAVE" button is clicked.



<!-- PROJECT STRUCTURE-->
## Project Structure

```plaintext
├── index.html
├── package-lock.json
├── script.js
├── server.js
└── styles.css
```


<!-- FILES -->
## Files

 - `index.html`: The main HTML file containing the structure of the web page.
 - `script.js`: JavaScript file for handling the front-end logic.
 - `server.js`: Node.js server file that serves the HTML, CSS, and JS files.
 - `styles.css`: CSS file for styling the HTML elements.



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Node.js installed on your local machine.

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/your-username/JS_Event_Security_Analysis.git
  ```
2. Navigate to the project directory:
  ```sh
  cd nodejs-web-server
  ```
3. Install dependencies:
  ```sh
  npm install
  ```


<!-- RUNNING THE SERVER -->
## Running the Server

To start the server, run the following command:
  ```sh
  node server.js
  ```
The server will be running on http://localhost:3000. Open this URL in your web browser to see the web page.



<!-- USAGE INSTRUCTION -->
## Usage Instructions

1. Open the Web Page: Once the server is running, navigate to http://localhost:3000 in your web browser.
2. Fill Out the Form:
   
   * Enter your first name in the "Firstname" input field.
    * Enter your last name in the "Lastname" input field.
   * Select your age from the dropdown menu. The selected age will be displayed in the read-only "Selected Age" field.
     
4. Save the Information: Click the "SAVE" button. An alert box will pop up saying "Button clicked!".



<!-- EXPECTED RESULTS -->
## Expected Results

When you interact with the web page, you should see the following results:
* When typing in the "Firstname" and "Lastname" fields, the input values will be logged to the console.
* The "Age" dropdown menu will be populated with values from 1 to 100.
* Selecting an age from the dropdown will display the selected age in the read-only "Selected Age" field.
* Clicking the "SAVE" button will trigger an alert box with the message "Button clicked!".


  
