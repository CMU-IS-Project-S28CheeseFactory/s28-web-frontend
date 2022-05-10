# s28-web-frontend

Information System Course Project - A web application for the prize-winning cheese producer in South Australia, S28 Cheese!

## Group Members (no orders):

Yixuan Guo, Yan Pan, Hongsen Lai,</br>
Shaoning Zhen, Shengyi Yan, Jingchao Zhang.

## Run this project on your local machine

You should follow the steps to run the <b>backend</b>!

- Set up a local mysql database: step(1)-(5)
- (1) install chocolatey following this tutorial https://chocolatey.org/install#individual
- (2) after choco install successfully, start powershell window with admin authority
- (3) type in <code>choco install mysql-cli</code> to install mysql client, this is an official console tool to login to remote/local database
- (4) type in <code>choco install mysql</code> to install mysql server, this is the mysql server where you data is stored
- (5) enter the data_center directory <code>cd s28_management_system/data-center/</code> and run <code>mysql -u root -p < dump.sql </code> to start local database
- (6) run the java backend using idea or you can run it in cmd window via mvn commands

You should follow the steps to run the <b>frontend</b>!
- make sure you have <b>node.js</b> and <b>yarn</b> on your computer;
- clone the repository to your local environment;
- always make sure you are on your own branch before you make any changes to the code!!! I will be crazy if you are not.
- run the command <code> cd s28_management_system/ </code> to enter the project directory;
- run <code>yarn add</code>, to automatically install the dependencies required for this project.
- when done, you can run this project by <code>yarn start</code>, and you will be able to see a basic web frontend app running on the 3000 port of your localhost.
- <b>note that if yarn is running into problems on your machine, use <code>npm install</code> or <code>npm start</code></b>
- The prerequisite of a successful run of frontend is that you have the backend running

## new project

