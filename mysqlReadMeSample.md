sudo apt update
sudo apt upgrade
sudo apt install mysql-server
sudo systemctl start mysql
sudo systemctl enable mysql
sudo systemctl status mysql
sudo mysql_secure_installation
sudo apt install mysql-client
mysql -u root -p
CREATE USER 'shavath'@'localhost' IDENTIFIED BY 'Shavath@1234';
CREATE DATABASE shavath;
USE shavath;
GRANT ALL PRIVILEGES ON shavath.* TO 'shavath'@'localhost';
FLUSH PRIVILEGES;
EXIT;
mysql -u shavath -p
USE shavath;
FLUSH PRIVILEGES;

