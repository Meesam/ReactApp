#React App
##Purpose
Built on Express4, Currently, it is a monolithic application that serves everything from routes and apis.

##Node Version
React App is meant to run node 6.10.2.

##How it Runs
ReactApp utilizes [PM2](https://github.com/Unitech/pm2), a node process manager, to keep itself running. Using the values in process.json, it by default spawns one instance of itself. Once the changes needed to convert svm into a completely stateless application are complete, then it will spawn multiple instances of itself so that PM2 can manage which instance will receive any particular request.

##How to Install and Run Locally
1. Clone the SVM repository.
2. Download the postgreSql and node js 
3. Start postgreSql
4. Populate the database.
5. Set an environment variable of
```
export  NODE_ENV=localdev
```
6. cd into the directory and run
```
npm install
```
7. create a file to log to
```
sudo touch /logs/svm.log
```
8. Install PM2 globally:
```
npm install pm2 -g
```
9. Start up SVM by issuing the commands
```
npm start
```
