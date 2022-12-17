/* steps  
--------------------
Basic server setup
--------------------
* 1. Create a folder (manually or command 'mkdir forler-name')
* 2. open command line to that folder
* 3. npm init (then follow instruction)
* 4. npm install express
* 5. create index.js
--------------------------
*  for Express/Node server
--------------------------
* 1.
   const express = require('express');
    const app = express();
    const port = process.env.PORT || 5000;

    app.get('/', (req, res) => {
        res.send('My first node experiment')
    });

    app.listen(port, () => {
        console.log('Listening to port', port);
    })

* 2. command "node index.js"
* 3. check browser for that port
------------------------
         get
------------------------
* 1. npm install cors
* 2. const cors = require('cors');
* 3. app.use(cors())
* 4. set middleware - app.use(express.json())
------------------------
      POST request
------------------------
* 1. 
*/