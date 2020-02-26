let arrow = document.getElementById('angleDown');
                arrow.innerHTML = "&#xf107;";
let arrow2 = document.getElementById('angleDown2');
                arrow2.innerHTML = "&#xf107;";

function dropDown1() {
    document.getElementById("myDropdown").classList.toggle("show1");
     
    if(dropDown1){
       arrow.innerHTML = "&#xf106";
       }else if(!dropDown1){
           arrow.innerHTML = "&#xf107;";
       }
        
    
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event1) {
  if (!event1.target.matches('.dropbtn')) {

    var dropdowns1 = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contains('show1')) {
        openDropdown1.classList.remove('show1');
      }
    }
  }
}

function dropDown2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event2) {
  if (!event2.target.matches('.dropbtn2')) {

    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var j;
    for (j = 0; j < dropdowns2.length; j++) {
      var openDropdown2 = dropdowns2[j];
      if (openDropdown2.classList.contains('show2')) {
        openDropdown2.classList.remove('show2');
      }
    }
  }
}

