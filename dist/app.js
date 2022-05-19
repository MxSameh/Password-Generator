"use strict";
// START
const generatePassword = (length) => {
    //
    const symbols = '!@#$%^&';
    const numbers = '0123456789';
    const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const small = capital.toLowerCase();
    let password = '';
    //
    for (let i = 0; i < length; i++) {
        let index;
        let c;
        const x = Math.round(Math.random() * 3);
        switch (x) {
            case 0:
                index = Math.round(Math.random() * (symbols.length - 1));
                c = symbols[index];
                password += c;
                break;
            case 1:
                index = Math.round(Math.random() * (capital.length - 1));
                c = capital[index];
                password += c;
                break;
            case 2:
                index = Math.round(Math.random() * (small.length - 1));
                c = small[index];
                password += c;
                break;
            case 3:
                index = Math.round(Math.random() * (numbers.length - 1));
                c = numbers[index];
                password += c;
                break;
        }
    }
    return password;
};
//********** FOR TESTING *****************//
// for (let i = 0; i < 10 ; i++){
//  let password = generatePassword(10);
//  console.log(`${password.length} : ${password} ` );
// }
