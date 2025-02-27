# experimental Deploy Glitch
[![Remix on Glitch](https://cdn.glitch.me/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button-v2.svg)](https://glitch.com/edit/#!/import/github/pbaranski/strapi-heroku-template)

# Strapi Heroku Deploy Button

This repository contains a custom Strapi application which is quickly and easily deployable on Heroku through a one-click deploy button

[![Deploy Directly to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/pbaranski/strapi-heroku-template)

<!-- <a href="https://www.heroku.com/deploy/?template=https://github.com/pbaranski/strapi-heroku-template">
<img src="https://assets.strapi.io/uploads/Deploy_button_heroku_b1043fc67d.png" />
</a> -->

## Requirements

To deploy this project on Heroku, you'll need:

- An Heroku account (Free)

## Swagger 

Due to some problems with URLS it need to be set manually in 

extensions\documentation\config\settings.json


## Database

This project will use the [postgresql Heroku addons](https://elements.heroku.com/addons/heroku-postgresql). The database configuration can be found in the `config/database.js` file. Using the existing configuration means that you project will also use the production postgresql database when running locally on your machine. 
You will need to have the same `DATABASE_URL` that the addon will create on your Heroku project if you want to use the postresql database locally.

  - Create an `.env` file at the root of your project containing the following code:

```
DATABASE_URL=...
```

If you want to use an SQLite database just for editing your collection-types, configurations locally on your machine, please comment the postgresql configuration in the `config/database.js` file and uncomment the SQLite one. 
You can also create a `config/env/production/database.js` file containing the postgresql connection and only keep the SQLite connection in your `config/database.js`. This way you'll have two different database connection depending on the environment.

## Upload - Hosting images

Heroku do not save local files so external service need to be used:
- Add: "strapi-provider-upload-cloudinary" to package.json
- Ucomment config/plugins.js content 
- Add to app.js: 
 ```
 "env": {
    "CLOUDINARY_NAME": {
      "description": "Cloud name of your Cloudinary account",
      "required": "true"
    },
    "CLOUDINARY_KEY": {
      "description": "Cloudinary API Key",
      "required": "true"
    },
    "CLOUDINARY_SECRET": {
      "description": "Cloudinary API Secret",
      "required": "true"
    }
  }
  ```

- Add Cloudinary account for hosting your assets (Free) 

This project will upload your assets on your Cloudinary account. The configuration can be found in the `config/plugins.js` file. Using the existing configuration means that you project will also use the cloudinary upload provider when running locally on your machine.
You will need to have the same `CLOUDINARY_NAME`, `CLOUDINARY_KEY` and `CLOUDINARY_SECRET` variables in an `.env` file locally on your machine.

  - Create an `.env` file at the root of your project containing the following code:

```
CLOUDINARY_NAME=...
CLOUDINARY_KEY=...
CLOUDINARY_SECRET=...
```

If you want to upload your assets on your computer when running locally on your machine, please comment the content of your `config/plugins.js` file. 
You can also create a `config/env/production/plugins.js` file containing the cloudinary provider and delete your `config/plugins.js`. This way you'll have two different upload providers depending on the environment.
