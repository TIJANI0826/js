// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP

// rot13("SERR CVMMN!") should decode to the string FREE PIZZA!

// rot13("SERR YBIR?") should decode to the string FREE LOVE?

// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

// 123456

function rot13(str) {
    list1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    a = 'ssss'
    new_string = []
    str = str.split("")
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if(list1.includes(element)){
            ele_index = (list1.indexOf(element) + 13) % 26
            
            new_string.push(list1[ele_index])
        }
        else{
            new_string.push(str[index])
        }
        
    }
    a = ''
    for (let index = 0; index < new_string.length; index++) {
        const element = new_string[index];
        a = a + element;
        
    }
  return a;
}

/**
* Your test output will go here
*/
/* Navigated to Learn JavaScript Algorithms and Data Structures Projects: Caesars Cipher | freeCodeCamp.org */
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
);