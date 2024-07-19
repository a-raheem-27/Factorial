let x = prompt('Enter your number')
let factorial = [];
for (let i = 1; i <= x ; i++){
    factorial.push(i);
} 
const mul = (a,b) => {
 return a*b;
}
document.write(factorial.reduce(mul));
