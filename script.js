document.addEventListener('DOMContentLoaded', function () {

//prints colors to the screen
  for(var i = 0; i < 60; i++){
      let colorDiv = document.createElement('div');
      randomColor = colorGenerator()
      colorDiv.style.cssText = `width:11.1%;float:left;padding-bottom:11.1%;background-color:${randomColor}`;
      document.body.appendChild(colorDiv);
    }
})

//converts the decimal value of the highest RGB to hex and returns it in color format
  function colorGenerator(){
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }