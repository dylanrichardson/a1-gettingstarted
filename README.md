Assignment 1 
###

Dylan Richardson
https://a1-drich14.herokuapp.com

This project shows off some of the basics of HTML, CSS, and Node.js. There is a single webpage located at the root of the site displaying my background pertaining to web development and CS. This page is served using the static module of Express.js. Styling is applied with the Tachyons CSS framework loaded via CDN.

## Technical Achievements
- **Express.js**: Instead of writing the boilerplate for serving a simple static HTML page, I opted to use the popular server library Express.js and it's submodule for static assets. This reduced the size and complexity of the server, cutting the line count in half.
- **Redirect**: Since this website consists of a single page, I decided to redirect all routes to the root instead of displaying a 404 error when not found. This was accomplished using Express.js middleware. One downside of the implementation is that the redirect middleware must be added to the server after the static middleware, otherwise it would redirect everything leading to a infinite loop. This constraint is not explicit in the code and can confuse developers new to Express.
- **Heroku Config**: Being familiar with Heroku for some time now, I knew that the Procfile was unnecessary. According to the docs, Heroku has not required a Procfile for Node.js apps with a start script in the package.json since 2013.

### Design Achievements
- **Tachyons**: This is one example of hundreds of CSS frameworks. I've tried a few more popular frameworks in the past like Bootstrap, Semantic UI, and Material Design libraries. I used the frameworks shorthand class notation to add margins, paddings, grids, borders, color, and even font tracking on the title.
