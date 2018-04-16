# News Application using React JS | Node.js | LowDB | REST API

This web application involves building a simple news application which fetches news articles from an external api vendor and display them in web application

### Overview of the Application
* This web application allows the user to login. Error handling has been done, incorrect username or password won't allow the user to login. For login, you can use -> (username: **akr**, password: **akr**)
* Allowed user to choose (**add/remove**) 5 news sources of their own choice from the list available and display their top 10 articles. As per the requirement, the user won't be allowed to select more than 5 news sources
* Allowed the user to save articles for future reference. The user can also view the list of saved articles

### List of Pages and How to use the Application
* Login Page -> The user can login into the application
* List of Sources -> The application lists down a total of 134 news sources. User has the option to select their own 5 news sources by clicking on either **Add Source** / **Remove Source** button. Once the user select a news source, the title of the source turns into a link, and clicking on that will redirect the user to the articles page where the top 10 articles for that particular source is listed
* List of Saved Articles -> Lists down the articles saved by the user
* Top 10 Articles -> Lists down top 10 articles of a particular source. Allows the user to save any article of their choice

## Steps to Setup and Run the Application

### Installation and Running
1. You need to have **node.js** and **npm** installed on your machine. Once installed, you can check the versions using the below commands

```sh
node -v
npm -v
```
Links for reference:
* [install node.js](https://nodejs.org/en/download/)

2. Clone the project from GitHub Repository and Install all the necessary packages

```sh
git clone https://github.com/imar26/react-nodejs-newsapi.git
cd react-nodejs-newsapi
cd news-app
npm install
```

2. Start node.js server

```sh
node index.js
```

3. Run the react application

```sh
npm start
```

4. Open your browser and go to [http://localhost:3000/](http://localhost:3000/)

### Technologies Used
* Node.js
* React JS
* LowDB
* REST API
