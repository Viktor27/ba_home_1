/*  Начальные 3 цифры в каждом номере- это код оператора
 Сделать вывод  в консоль таким
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
console.log('======= 1st home task =======');
let st = `063-111-1234 (333)456-8768 4446575547`;
let separator = " ";
let numbers = st.split(separator);
let reg = /(\d{0,3})(\d{0,3})(\d{0,4})/;

for (let i = 0; i < numbers.length; i++) {
    // debugger;
    const number = numbers[i].replace(/\D/g, '').match(reg);
    let formated = !number[2] ? number[1] : '(' + number[1] + ') ' + number[2] + (number[3] ? ' ' + number[3] : '');
    console.log(formated);
}
