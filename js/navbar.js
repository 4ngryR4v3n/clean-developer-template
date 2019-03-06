/* moves sidebar element into view */
function openNav() {
  document.getElementById("navSidebar").style.left = "0px";
  document.getElementById("toggleNav").innerHTML = '<button class="navbar-toggler" onclick="closeNav()"><span class="navbar-toggler-icon"></span></button>'
  /*document.getElementById("main").style.marginLeft = "250px";*/
}

/* Moves sidebar element left, and out of view */
function closeNav() {
  document.getElementById("navSidebar").style.left = "-75vw";
  document.getElementById("toggleNav").innerHTML = '<button class="navbar-toggler" onclick="openNav()"><span class="navbar-toggler-icon"></span></button>'
  /*document.getElementById("main").style.marginLeft = "0";*/
}

