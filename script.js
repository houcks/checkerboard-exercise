document.addEventListener('DOMContentLoaded', function () {
  let screenDiv = document.createElement('div')
  screenDiv.style.cssText = 'height:100%;width100%';
  document.body.appendChild(screenDiv);
    for(var i = 0; i < 100; i++){
      let colorDiv = document.createElement('div');
      if(i % 2 === 1){
        colorDiv.style.cssText = 'width:11.1%;float:left;padding-bottom:11.1%;background-color: red';
      }
      else{
        colorDiv.style.cssText = 'width:11.1%;float:left;padding-bottom:11.1%;background-color: black';
      }
      
      screenDiv.appendChild(colorDiv);
    }
  })