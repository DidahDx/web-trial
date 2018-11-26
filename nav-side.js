/*  sidenav js */


/* Set the width of the side navigation to
250px */ 
var set=0;

function test(){

if(set==0){
	openNav();
}
else{
	closeNav();
}

}

function openNav() {
 document.getElementById("mySidenav").style.width="16.5%";
 document.getElementById("main-body").style.width="66.8%";
 document.getElementById("adverts").style.width=" 16.7%";/*
 document.getElementById("mySidenav").style.height="100%";*/
 set=1;
}

function closeNav() {
 document.getElementById("mySidenav").style.width = "0%";
  document.getElementById("main-body").style.width="77%";
  document.getElementById("adverts").style.width= "23%";
   document.getElementById("mySidenav").style.height="0%";
  set=0;

}

