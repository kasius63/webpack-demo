// commonJS Module
//var _ = require('lodash')

// ES6 Module
import _ from 'lodash'
import './style.css' //Webpack
import './hello.scss'
import {area, circumference} from './.js/circle'

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

console.log(area(10) );
console.log(xxx(5))