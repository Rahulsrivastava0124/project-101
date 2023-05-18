console.log("all ok");
function Change_Nav_Color(Clickid) {
   let clicked_data= document.getElementById(Clickid);
   let color=clicked_data.attributes.name.value;
   let change_color=document.getElementById("Default_color")
   change_color.style.backgroundColor=color;
   if (color=='Black') {
    let length=document.getElementsByClassName("menu_link").length;
    for (let index = 0; index < length; index++) {
        document.getElementsByClassName("menu_link")[index].style.color="white";
    }
   }else{
    let length=document.getElementsByClassName("menu_link").length;
    for (let index = 0; index < length; index++) {
        document.getElementsByClassName("menu_link")[index].style.color="black";
    }
   }
}