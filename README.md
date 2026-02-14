# Time_Capsule
The Digital Time Capsule is a Node.js-based web application that allows users to store a message and set a future date for unlocking it. The system securely saves the message and reveals it only when the specified unlock time is reached through server-side validation.
📦 Digital Time Capsule – Project Description

Digital Time Capsule is a full-stack web application built using Node.js, Express, and EJS that allows users to securely store a message and set a future date for unlocking it. The application ensures that the saved message remains inaccessible until the specified unlock date and time is reached.

The system uses server-side date validation and file-based storage to manage capsule data. When a user attempts to open the capsule, the server compares the current date with the stored unlock date. If the unlock date has passed, the message is revealed; otherwise, the application displays a locked status message.

This project demonstrates core backend development concepts including routing, form handling, server-side logic, date comparison, file system operations, and dynamic template rendering using EJS.

🔧 Technologies Used

Node.js

Express.js

EJS (Embedded JavaScript Templates)

Body-Parser

File System (JSON storage)

🎯 Key Features

Store future messages securely

Set custom unlock date and time

Server-side validation of unlock condition

File-based data persistence

Simple and clean user interface

💡 Learning Outcomes

Building RESTful routes

Handling POST requests

Managing server-side state

Working with JSON file storage

Implementing time-based logic in JavaScript
