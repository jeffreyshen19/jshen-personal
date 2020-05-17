function toggleName(){
  var el = document.getElementById("name");

  if(el.className == "chinese") {
    el.innerHTML = "Jeffrey Shen";
    el.className = ""
  }
  else{
    el.innerHTML = "沈嘉成"
    el.className = "chinese"
  }
}
