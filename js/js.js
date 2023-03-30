const theButton = document.querySelector("button");
const output = document.querySelector('div');

const buttonCss = document.styleSheets[0].cssRules[0].cssRules[1];

console.log(buttonCss.parentRule)