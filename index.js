//js
const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const PORT = 3000;

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(express.urlencoded({extended: true}));
app.use(session({
    store: new FileStore(),
    secret: '.mzxdsioeru042839-q958llcvxzmkd8u4'
}));

app.get('/', (req, res) => {
    res.render('index', {locals: {title: 'Welcome'}});
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});