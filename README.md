# Web Blog system use mysql backend
#### Run on Ubuntu 16.04 system
#### Need to have node and npm setup

### Step 1: make sure you have installed mysql in your computer
 - Type `service mysql status` in linux to see if it is running
 - Need to check if you can connect to mysql or not
 - `sudo mysql -u root mysql` should run successfully

### Step 2: modify your own config.json file
 - Take a look at server.js, the default environment is 'development'
 - Make sure your database exist in mysql, in my case is 'ppap', use `CREATE DATABASE [dbname];` to create it
 - Make sure the user stated in your config.json is created, I use `CREATE USER '[username]'@'[localhost]' IDENTIFIED BY '[password]';`
 - Make sure your user have right to modify the database, I use `GRANT ALL PRIVILEGES ON [dbname].* TO '[username]'@'localhost';`

### Step 3: migrates the database
 - You'll need to install sequelize-cli to do this
 - `[sequlize binary] db:migrate` will use the migration files provided in [src/migrations](https://github.com/YuanTingHsieh/sql-blog-starter-skeleton/tree/master/src/migrations) to config your database

### Step 4: start dealing with the project
 - Now you finish all the basic settings and can start building your own blog system!
