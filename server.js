const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

//Setting paths to static files 
app.use(express.static(path.join(__dirname, 'public'),  {
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    },
}));

//Queries to main site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//server start
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})