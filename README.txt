------------------- Index.js ---------------------------

First approach using JavaScript only:

If I copied the source code of "https://time.com" and passed it manually on the "DOMParser" then I am able to 
create the array of times stories using query selector and get attributes methods of js.

But, when I tried to fetch the source code using fetch() method then some errors occured. I tried two more 
methods like getJson() and XMLhttpreuest() but same error occured.

ERROR Occurred - 
Access to fetch at 'https://time.com/' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' 
to fetch the resource with CORS disabled.

So I tried the given assignment using cheerio library.
.
---------------------Cheerio.js----------------------------

Steps to run the program:
    1. Run npm i in root folder. 
    2. Go to root folder in terminal and write 'node cheerio.js'.
    3. Open browser and enter "http://localhost:3000/getTimeStories".

