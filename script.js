const texts = ['John'];
let count =0;
let index =0;
let currentText = '';
let letter = '';
(function type(){
 if (count=== texts.length)
       count = 0;
 currentText = texts[count];
 letter = currentText.slice(0, ++index);
 document.querySelector('.typing').textContent = letter;
 if(letter.length === currentText.length)
 {  
    clearTimeout();
 }
setTimeout(type, 400);

}())