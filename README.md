# Web Blog system use mysql backend
#### Run on Ubuntu 16.04 system

### Step 1: make sure you have installed mysql in your computer
 - Type `service mysql status` in linux to see if it is running
 - Need to check if you can connect to mysql or not
 - `sudo mysql -u root mysql` should run successfully

### Step 2: modify your own config.json file
 - Take a look at server.js, the default environment is 'development'
 - Make sure your database exist in mysql, in my case is 'ppap'

### Step 3: migrates the database
 - You'll need to install sequelize-cli to do this
 - `[sequlize binary] migrate` will use the migration files to config your database

### Step 4: start dealing with the project
 - Now you finish all the basic settings and can start building your own blog system!
