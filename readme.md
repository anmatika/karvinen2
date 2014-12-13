# Follow these instructions
http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/

# Quick start | run server (/app)
 cd /server && npm test

# Build to server/dist
cd /client && grunt build --force

# Run server at production mode (/server/dist)
cd /server && npm start

# Test
cd /client && grunt karma

# Deploy to Nodejitsu
cd / && jitsu deploy

# Protractor 
cd /server && npm test
cd client/node_modules/protractor/bin && ./webdriver-manager start
cd client/node_modules/protractor && protractor conf.js