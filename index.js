import './style.css';
// var styles = require('./style.css');
import './other.css';
setTimeout(() => {
    document.getElementById('app').innerHTML = 'Hello Webpack And Vue!';
}, 5000);