1.sudo apt update 
 
2.sudo apt upgrade
 
3.sudo apt install mysql-server 

4.sudo systemctl start mysql 

5.sudo systemctl enable mysql

6.sudo systemctl status mysql

7.sudo mysql_secure_installation

8.sudo apt install mysql-client

9.mysql -u root -p

10.CREATE USER 'shavath'@'localhost' IDENTIFIED BY 'Shavath@1234';

11.CREATE DATABASE shavath;

12.USE shavath;

13.GRANT ALL PRIVILEGES ON shavath.* TO 'shavath'@'localhost';

14.FLUSH PRIVILEGES;

15.EXIT;

16.mysql -u shavath -p

17.USE shavath;

18.FLUSH PRIVILEGES;

