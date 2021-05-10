window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//není to vono ale není čas
$(function () {
    $('#popover1').popover({
      container: 'body'
    })
  })

  $(function () {
    $('#popover2').popover({
      container: 'body'
    })
  })
  $(function () {
    $('#popover3').popover({
      container: 'body'
    })
  })
  $(function () {
    $('#popover4').popover({
      container: 'body'
    })
  })