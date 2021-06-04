let sumNumber = 0;
let n = +(Math.trunc( prompt('Введіть число (n) від якого ми будемо складати', 1)));

while (isNaN(n)){
    n = +(Math.trunc( prompt('Введіть CАМЕ ЧИСЛО (n) від якого ми будемо складати', 1)));
}

let m = +(Math.trunc(prompt('Введіть число(m) до якого ми будемо складати (включно)', 2)));


while (isNaN(m)){
    m = +(Math.trunc(prompt('Введіть CАМЕ ЧИСЛО (m) до якого ми будемо складати (включно)', 2)));
}
const skippingEvenNumbers = confirm ("Чи потрібно пропускати парні числа?");

console.log (n);
console.log (m);
console.log (skippingEvenNumbers);

if (n<m){
    for (n; n<=m; n++){  
        if (skippingEvenNumbers == true){
            if (n % 2 === 0){            
                continue
            } 
        }    
        sumNumber = n + sumNumber;
    }
}

else if (m<n){
    for (m; m<=n; m++){  
        if (skippingEvenNumbers == true){
            if (m % 2 === 0){
                continue
            } 
        }    
        sumNumber = m + sumNumber;
    }    
}

else
sumNumber = `Обидва числа однакові, тому відповідь: ${n}`;

document.writeln (sumNumber);