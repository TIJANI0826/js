var textBox = document.getElementById("txt")
var h3Text = document.getElementById("ht")

// document.getElementById("ht").innerHTML = document.getElementById("txt").value

textBox.addEventListener("click", shout);

//function myFunction() {
//    alert ("Hello World!");
//}

function changeText(){
   h3Text.innerHTML = textBox.value
}
function shout(){
    h3Text.innerHTML = textBox.value
    //alert(textBox.value)
}
h3Text.addEventListener("change", changeText)
