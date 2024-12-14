function aside_display(){
  let aside = document.getElementById("aside-container");

  if(aside.style.display == "none"){
    aside.style.display = "block";
  }
  else{
    aside.style.display = "none";
  }
}