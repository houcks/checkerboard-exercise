document.addEventListener('DOMContentLoaded', function () {
  //converts the decimal value of the highest RGB to hex and returns it in color format
  function colorGenerator(){
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }

//prints colors to the screen
  for(var i = 0; i < 63; i++){
    var colorDiv = document.createElement('div');
    randomColor = colorGenerator()
    colorDiv.style.cssText = `width:11.1%;float:left;padding-bottom:11.1%;background-color:${randomColor}`;
    document.body.appendChild(colorDiv);
  }
  
  //changes color by looping through all child elements and assigning random colors
  function changeColor(){
    for(var i = 0; i < document.body.children.length; i++){
      let newColor = colorGenerator();
      document.body.children[i].style.backgroundColor = `${newColor}`;
    }
  }
  var audio = new Audio('sandstorm.mp3')
  document.body.addEventListener('click', audio.play())

setInterval(changeColor, 2000)
})

