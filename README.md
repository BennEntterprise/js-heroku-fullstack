# This project is a Fullstack Heroku App Example.

# The following are true

* It utilizes [MongoDB](https://www.mongodb.com/) via [https://www.mongodb.com/cloud](MongoAtllas) and [Mooose as an ORM](https://mongoosejs.com/docs/)
* It utilizes [Express](https://expressjs.com/) as a server framework.
* It utilizes [React: Create-react-app](https://create-react-app.dev/)
* It utilizes [Node](https://nodejs.org/en/)
* Is deployed to []() using the [heroku/nodejs](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nodejs) buildpack
-----
* It was inspired by this [article](https://dev.to/hawacodes/deploying-a-mern-app-with-heroku-3km7) written by [Hawacodes]()
----
* It only contains javascript. (no typescript yet)
* It has a [Live Deployment](https://js-heroku-fullstack.herokuapp.com/) 
* It utilizes [dotenv](https://www.npmjs.com/package/dotenv) to manage vars
* It does NOT track ENV Vars in this directory. The Envs take this form:
    <code>
    MONGO_PASSWORD=<you-need-your-password><br>
    MONGO_USERNAME=<you-need-your-usrname><br>
    MONGO_POSTPEND=<this-will-be-the-string-to-your-mongo-db-cluster> <br>
    MONGODB_URI=mongodb+srv:// (this is standard mongo protocol)
    </code>
* It's heroku dashboard is [here](https://dashboard.heroku.com/apps/js-heroku-fullstack/settings)
-----
* Solidfy/explain the commands 
* Outline the local development script (goal is to have HMR for both front and backend.)
* Add TS to the frontend CRA
* Add TS to backend


## Working locally
1) Instal both deps for root folder and client folder.
2) `yarn develop` , uses nodemon to reload server. 
3) Make changes in frontend, then run `yarn build`
4) Refresh/navigate to the required port.