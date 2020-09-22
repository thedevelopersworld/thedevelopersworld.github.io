function menu_open(){

    var open =  document.getElementById("navicon1");
    var close =  document.getElementById("navicon2");
    var menu = document.getElementById("menu");
    var searchbox = document.getElementById('search');
    open.style["visibility"]="hidden";
    close.style["display"]="inline-block";
    menu.style["visibility"]="visible";
    searchbox.style['margin-top']="40px";
//     setTimeout(function(){   
//         menu_close(); 
//      }, 3000)
 }

 function menu_close(){
    var open =  document.getElementById("navicon1");
    var close =  document.getElementById("navicon2");
    var menu = document.getElementById("menu");
    var searchbox = document.getElementById('search');
    close.style["display"]="none";
    open.style["visibility"]="visible";
    menu.style["visibility"]="hidden";
    searchbox.style['margin-top']="-100px";
 }
