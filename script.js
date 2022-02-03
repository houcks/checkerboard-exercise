document.addEventListener('DOMContentLoaded', function () {

//let body = document.getElementsByTagName('body')[0]
//body.style.background = 'background:linear-gradient(#820391, #E43FF7)';
  for(var i = 0; i < 63; i++){
    let colorDiv = document.createElement('div');
    let offset = 2 * i;
    if(i % 2 === 1){
      colorDiv.style.cssText = `width:11.1%;float:left;padding-bottom:11.1%;background-color: rgb(${offset},255,${offset});`;
    }
    else{
      colorDiv.style.cssText = `width:11.1%;float:left;padding-bottom:11.1%;background-color: rgb(255,${offset},${offset});`;
    }
    
    document.body.appendChild(colorDiv);
  }
})