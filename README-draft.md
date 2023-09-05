# 13 Module Challenge ORM eCommerce backend sam bailey

Northwestern Bootcamp challenge week 13

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

![npm](https://img.shields.io/npm/v/npm.svg?logo=npm)

![dotenv](https://img.shields.io/badge/dotenv-8_2._0-blue)

# Table of Contents

- [13 Module Challenge ORM eCommerce backend sam bailey](#13-module-challenge-orm-ecommerce-backend-sam-bailey)
- [Table of Contents](#table-of-contents)
  - [Project description](#project-description)
  - [Application functionality](#application-functionality)
  - [Technology used](#technology-used)
  - [Installation, usage instructions and known issues](#installation-usage-instructions-and-known-issues)
  - [Testing](#testing)
  - [Video walkthrough](#video-walkthrough)
  - [Credits and notes for the graders](#credits-and-notes-for-the-graders)

## Project description

The goal of this assignment is to build the backend for an e-commerce site. Starter code was provided. Express.js was used to build the working API and sequelize was used to interact with a MySQL database.

## Application functionality

After the database schema is loaded and the data seeded, the server is available at http://127.0.0.1:3001 requests can be made to the RESTful API using a GUI like [Insomnia](https://insomnia.rest/) or cURL commands in the terminal.

***User of the application can:***
1. Open GET requests to the API and view the database's categories, products and tags
2. Use POST, PUT and DELETE requests to create, update and delete categories, products and tags
## Technology used

The application was built using:

[node.js, v20.5.0](https://nodejs.org/en), an asynchronous, event-driven JavaScript runtime designed to build scalable network applications

[express.js](https://expressjs.com/), a fast, *un-opinionated*, minimalist web framework for node.js 

[MySql, v2.1.0](https://dev.mysql.com/doc/refman/8.1/en/), the world's *most popular* open source database

[sequelize](https://sequelize.org/), sequelize is a modern TypeScript and Node.js ORM MySQL and other databases

[dotevn](https://www.npmjs.com/package/dotenv) A module that loads environment variables into process variables

[insomnia](https://insomnia.rest/) a GUI that provides an easy to use interface that supports designing, debugging and testiing APIs

[cURL](https://curl.se/), "client URL" command line tools and libraries for transferring data with URLs

## Installation, usage instructions and known issues

<details>
<summary> Expand for installation and usage instructions</summary>

Users or contributors can run the application locally or in a hosted environment: 

1.  **Clone the repository, run the application using the command line**

    • Clone the repository: `git@github.com:thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey.git`

    • Install required frameworks, dependencies and packages by opening a terminal instance and running `npm install`

    • [Open connections.js](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/employeeManagement/conections/connections.js) and add your SQL username, if not root, and password

    • Open the sources in your favorite code editor and use your favorite tool to open a connection to you MySql server

    • [Open and execute the schema](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/2998f381bef1e6509b0e622bc35c9a5abb662197/db/schema.sql)

    • [Open the seeds file and seed the database with the initial values](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/2998f381bef1e6509b0e622bc35c9a5abb662197/db/seeds.sql)

    • In the `terminal`, navigate to the project directory where you cloned the sources, and run `npm start`
    
    • After you admire the super duper cool 'splash screen', follow the prompts 

    • Select `exit` or press `control+c` to close the application

2. **Usage instructions**
    
    After the application makes a successful connection to the database and is running in the command line, you can select an option from the list to view or update the database:

    **main menu**

    *Expected behavior:* After running `npm start` in  the command line, the user should be presented with the [the super duper cool 'splash screen'!!!](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/01-splashscreen.png) and the application's [main menu](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/02-mainmenu.png)

    **view all departments**

    *Expected behavior:* Select `view all departments` and you will be presented with the [default departments](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/03-viewalldepartments.png) inserted into the database.

    **view all roles**
    
    *Expected behavior:* Select `view all roles` and you will be presented with the [default roles](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/04-viewallroles.png) inserted into the database.

    **view all employees**
    
    *Expected behavior:* Select `view all employees` and you will be presented with the [default roles](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/05-viewallemployees.png) inserted into the database.

    **add a new department**
    
    *Expected behavior:* Select `add department` and you [prompted for the department name](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/06-addadepartment-INTERNS.png), after pressing enter the new department will be added to the database [intern department inserted into the database](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/07-adddepartment-RESULT.png).

    **add a new role**

    *Expected behavior:* Select `add role` and you [prompted for the new role's name, salary and department id](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/08-addarole.png), after entering the data for the  new role, it will be added to the database [social media manager role, salary and id inserted into the database](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/09-addarole-RESULT.png).

    **add an employee**

    *Expected behavior:* Select `add an employee` and you [prompted for the employee's first name, last name, the role number, and manager id](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/10-addemployee.png), after entering the data for the  new role, it will be added to the database [new employee "Linda Ronstadt" added to the database](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/11-addemployee-RESULT.png).

    **update an employee's role**

    *Expected behavior:* Select `update an employee role` and you [prompted for the employee's first name and new role number](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/12-updateemployeerole.png), after entering the data for the  new role, it will be added to the database [employee Linda Ronstadt, formerly an Auditor, is now a Studio Engineer ](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/13-updateemployeerole-RESULT.png).

    **remove an employee from the database**

    *Expected behavior:* Select `remove an employee from the database` and you [presented with a list of current employees](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/14-removeemployee.png), after selecting the employee to remove, the employee will be removed from the database [the employee "Mary J. Blige" has been removed from the database](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/15-removeemployee-RESULT.png).

    **exit the application**

    *Expected behavior:* [Select 'exit'](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/16-exit.png), after pressing "enter" the connection to the database will be closed and [the application will stop running](https://github.com/thoughtsinbuttermilk/12-ModuleChallenge-EmployeeTracker-sambailey/blob/04deb8b68ffc4cd68f7a3bdaffdf72119340cec2/assets/17-exit-RESULT.png).


    ***Known issues***

    • When the application starts, the first message displayed in the console is duplicated.
    
    • Fields which require numeric values are not being validated; the application will throw if a non-numeric value is entered.
    
    • More generally, new data entered into the database is not validated.
    
    • I have only enabled support for the `delete employee` feature listed in the project "bonus" section; the other "bonus" features have not been implemented.

    </details>

## Testing

The 1.0 version of this application does not have any unit tests.

## Video walkthrough


Please see [this video](https://drive.google.com/file/d/1-Y6Jux-_2rikyk2s2DbqWJxlQY6lQGKf/view?usp=sharing) for a demonstration of running the application and using the features.

## Credits and notes for the graders

I would like to thank my Northwestern Bootcamp instructor, [NikkiTheBugSlayer](https://github.com/NikkiTheBugSlayer) for her exceptional investments to ensure our cohort is able to understand and learn the concepts taught during this coursework. and our teaching assistants for your review of this assignment.  _Thank-you._

Grading team: I appreciate and look forward to your feeddback! 
