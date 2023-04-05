// const button  = document.querySelector('button');
// const heading = document.querySelector('h1');

function download() {
    window.location.href = "";
}

const textBox = document.getElementById("#Email_TB");
if (textBox.value.trim() !== "") {
  console.log("The text box has some text in it!");
} else {
  console.log("The text box is empty.");
}




// buttons -------------------------- {
var dropped = false;
var changed_state = false;

function translate_screen(direction)
{
  changed_state = false;
  if ((direction == 1) && (dropped != false))
  {
    dropped = false;
    changed_state = true;
  }
  else if ((direction == 0) && (dropped != true))
  {
    dropped = true;
    changed_state = true;
  }
  console.log("this works!!!! :D");
  console.log("dropped =  ",dropped ,"\ndirection =", direction,"\nchanged_state? = ",changed_state);
}



function quitter()
{
  console.log("am Quit");
}
//  \buttons ------------------- }

var rember = false;
function remember_me()
{

}