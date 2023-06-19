# full-stack-bank

I will be refactoring my bad-bank app into a three tier full stack program. Adding a back-end and authentication.

# Project Title:

- Full Stack Bank App

# Description/Motivation:

Originally the project was a bad bank app where it had a simple front end where you could create an account, login, deposit and withdraw money, and check your balance. I am refactoring this app to be a good bank in order to do that I have added a back end with a database and API. I will also be using firebase to implement authorization and authentication for the users and the tools provided in the bank app. This will improve the app to where a database of users exists and makes it more functional. By adding authentication and authorization it will add security to the app making it more realistic and usable in the future.

# Installation Guidelines:

- Start by cloning the project from GitHub.
- Then running npm install to make sure your computer and system has all the dependencies.
- Next open your docker desktop, then run this command on your terminal (docker run -p 27017:27017 --name whateverName -d mongo).
- After that you can open Robo 3T to see the database if you choose and simply connect to localhost:27017.
- Finally run node index.js in your terminal and go to your browser and enter localhost:3000 and the program should run.

# Screenshots:

# Technology used:

- Express
- NodeJs
- Bootstrap
- MongoDB
- Studio 3T
- Cors
- Docker

# Features:

- Adding Firebase Google

# Future Features:

- Adding Users and Bank Tellers
- Account types: checking, savings
- Assigning random account numbers

License: MIT
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
