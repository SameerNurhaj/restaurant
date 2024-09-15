$(document).ready(function () {
  // Sticky header logic
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  // Set current year in the element with ID "autodate"
  function newDate() {
    return new Date().getFullYear();
  }
  
  $("#autodate").text(newDate());
});
