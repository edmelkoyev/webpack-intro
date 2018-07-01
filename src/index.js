// import jquery from 'jquery';
import { Greeter } from "./greeter";

import styles from  './styles.scss';
import logo from  './logo.png';

const greeter = new Greeter();

const message = greeter.greet('Hello', 'Webpack');

// jquery('#root').text(message);
console.log(message);
console.log(styles);
console.log(logo);


const app = document.querySelector('#root');

const img = document.createElement('img');
img.src = logo;
img.className = styles.logo;



const h1 = document.createElement('h1');
h1.textContent = 'Lorem ipsum dolor sit amet ...';
h1.className = styles.title;

app.appendChild(img);
app.appendChild(h1);