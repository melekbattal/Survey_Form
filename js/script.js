window .onload = function(){
var group = document.getElementById("form-gender-group");
var dirb = document.getElementById("differentidentity");

group.addEventListener("change", (v)=>{
if(v.target.value == "different-identity"){
    dirb.setAttribute("required","");
}else{
    dirb.removeAttribute("required");
}
});
}
