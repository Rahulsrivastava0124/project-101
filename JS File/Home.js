console.log("all ok");
function Change_Nav_Color(Clickid) {
    console.log(Clickid);
   let clicked_data= document.getElementById(Clickid);
   let color=clicked_data.attributes.name.value;
   let change_color=document.getElementById("Default_color")
   change_color.style.backgroundColor=color;
}