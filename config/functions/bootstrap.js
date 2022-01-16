'use strict';
const fs = require("fs");
const path = require("path");
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

 try {
        if(process.env.HEROKU_APP_NAME){
            let settingsPath = path.resolve("extensions", "documentation", "config", "settings.json");
            // read file and make object
            let content = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
            
            let url_heroku = `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`;

            let heroku_server = content.servers.some((val) => {
                return Object.values(val).includes(url_heroku);
            })

            console.log(`Heroku server doc url set: ${heroku_server}`);

            if(!heroku_server) {
                console.log("Updating server settings for documentation");
                const server = {
                    url: url_heroku,
                    description: "Heroku server dev"
                  };
                // edit or add property
                content.servers.push(server);
                //write file
                fs.writeFileSync(settingsPath, JSON.stringify(content, null, 2));
            }

        }
    } catch (e) {
      console.error(e);
    }

module.exports = () => {};
