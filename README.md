# Age of Empires 2 - Web application with API integration ⚡️

## Project Briefing

This is a simple database application which integrates with Age of Empires 2 API and lists various entities available in the game like units, civilizations, structures and technologies.

Made with ❤️ by **[@apfirebolt](https://github.com/Apfirebolt/)**

Please find me [here](https://apgiiit.com/)
## Features

- Demonstrates use of Context API in React.
- Demonstrates use of beautiful Material UI React Components like cards, buttons, accordions and more.
- Contains use of updated React Router packages.

## Built With

* [React](https://reactjs.org/)
* [Context API](https://reactjs.org/docs/context.html)
* [Material UI React](https://mui.com/)

## Project setup

Simply install node modules for the React app and you're done at least for the development mode.

```
npm install
npm start
```

For production, build the frontend of the app. 

```
npm run build
npm start
```

## Future Updates

Deployment scripts to be added through Docker, Heroku and Netlify.

## Heroku Deployment

Heroku is probably the easiest of the methods available to make your app available to the public. It might not be the best method for production ready apps, but would be more than suffice for testing purpose.

So, the requirements then. You must have a Heroku account and certain free space available in case you're using free version.

1. From your Heroku Web Dashboard (https://dashboard.heroku.com/apps) click on "New" to create a new app, give a name to the app which should be unique in Heroku universe.
2. Navigate to the 'Deploy' tab and choose "Github".
3. Create a repo on Github and push all your React app code in it.
4. Just below the Deployment section, you'd find option to connect your app from Github to the current Heroku app. You can do so by simply searching for your app which must be on your Github account.
5. Choose a branch to deploy, optionally you can also setup a pipeline which would automatically deploy if a given branch is modified on Github. Do not click on 'Deploy' yet, there is one thing still to do.
6. We forget one important step, that is to add a build pack which would deploy React apps on Heroku. Heroku does have build packs for Python, Ruby but not something by default which could deploy your react app.
7. Go to 'Settings' tab, choose build-packs and add this 'https://github.com/mars/create-react-app-buildpack'
8. Go back to step 5 and click 'Deploy'.
9. You'd see logs for your on-going build, in case it is a success you'd see the link of your app at the bottom once the build
process is executed successfully.
10. For instance, my app link is https://react-aoe2-app.herokuapp.com/technologies, that is it. Your app is live now on Heroku.

## Docker Deployment

This app can also be deployed in production using Docker containers assisted through Nginx servers serving the build files.

1. Setup your Docker and Nginx files within the project directory.
2. Create a Docker image
3. Spawn a container from the image created on port 80

```
sudo docker build . --tag=react-aoe2
sudo docker run -d -p 80:80 react-aoe2
```

## Project Screenshots

Please find some of the screenshots of the application. Below is the screenshot of the Homepage.

![alt text](./screenshots/home.jpg)

Civilizations page, this page lists all the civilizations available in the game.

![alt text](./screenshots/civilizations.png)

Structures page, this page lists all the structures available in the game.

![alt text](./screenshots/structures.png)

Technologies page, this page lists all the technologies available in the game.

![alt text](./screenshots/technologies.png)
