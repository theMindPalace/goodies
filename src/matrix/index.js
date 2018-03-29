
import './index.css';
const c = document.getElementById('c');

const ctx = c.getContext('2d');

c.height = window.innerHeight;
c.width = window.innerWidth;

console.log(ctx)

var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";

// split matrix into individual characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; 
var drops = [];

ctx.fillStyle = "rgba(0, 0, 250, 1)";

