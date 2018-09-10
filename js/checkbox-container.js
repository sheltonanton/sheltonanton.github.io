var container;
function init(elementId){
  container = document.getElementById(elementId);
  a=["#4f47b8","violet","green","orange","red","grey","blue","silver","black"]
  for(i=0;i<9;i++){
    container.innerHTML = container.innerHTML+
                          `<div name='${a[i]}'  class='checkbox' style='border-color: #aaa;' onclick='javascript:callColor("${a[i]}",this)'></div>`
                          +"\n";
  }
}

function callColor(color,ref){
  ref.style.backgroundColor = color;
  ref.style.borderColor = color;
}
