# News Backend

Back end uses Node.js/Express and MongoDB.

There are two endpoints in the backend through the news router. I added a GET method endpoint, which is the root endpoint of news router, as a proxy to fetching other news API. Adding this extra layer of abstraction allows better control over the data. The other endpoint is get news, which doesn't have a view attached. It returns all saved news. I added extra layers of static methods to the database model for also more control over error.
