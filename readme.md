sudo npm install -g bower
sudo npm install -g grunt-cli
sudo apt-get install ruby
sudo gem install compass

# Follow these instructions
http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/

# After Git Clone
cd /client && npm install
cd /client && bower install 
cd /client grunt build --force
cd /server && npm install


# Quick start | run server (/app)
 cd /server && npm test

# Build to server/dist
cd /client && grunt build --force

# Run server at production mode (/server/dist)
cd /server && npm start

# Unit test
cd /client && grunt unit

# E2e test
cd /client && grunt e2e

# Protractor (manual e2e test) 
cd /server && npm test
cd client/node_modules/protractor/bin && ./webdriver-manager start
cd client/node_modules/protractor && protractor conf.js

# Compass scss -> css
cd /client && grunt watch

# ***
# KEEP EXPRESS RUNNING FOREVER (EVEN AFTER SSH SESSION END)
# AND FORWARD port 3000 -> 80
# ***

* Follow these steps

* 1) cd code/karvinen2 && git pull
* 2) cd ../server && rm -rf dist
* 3) cd code/karvinen2/client && grunt build --force
* 4) cd code/karvinen2/server
* 5) sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
* 6) NODE_ENV=production forever start bin/www 

* More info:
* https://www.npmjs.com/package/forever
* http://stackoverflow.com/questions/25084368/how-do-i-use-forever-with-express-to-keep-a-nodejs-server-running
* http://stackoverflow.com/questions/7674565/node-express-set-node-env-when-using-forever-to-run-script-continiously

# ***
# SETUP FTP
# ***

* https://www.digitalocean.com/community/tutorials/how-to-set-up-vsftpd-on-ubuntu-12-04

Problems and solutions:
BadValue Invalid or no user locale set. Please ensure LANG and/or LC_* environment variables are set correctly
http://stackoverflow.com/questions/26337557/badvalue-invalid-or-no-user-locale-set-please-ensure-lang-and-or-lc-environme

Failed to build gem native extension (installing Compass)
http://stackoverflow.com/questions/22544754/failed-to-build-gem-native-extension-installing-compass