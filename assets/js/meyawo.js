/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

$(".about").click(function() {
  $('html,body').animate({
      scrollTop: $("#about").offset().top},
      'slow');
});


// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function toggleContent(paragraphId, linkId) {
    var paragraph = document.getElementById(paragraphId);
    var link = document.getElementById(linkId);

    if (paragraph.classList.contains("truncated")) {
      paragraph.classList.remove("truncated");
      link.innerText = "Read less";
    } else {
      paragraph.classList.add("truncated");
      link.innerText = "Read more";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.getElementsByTagName("p");

    for (var i = 0; i < paragraphs.length; i++) {
      var paragraph = paragraphs[i];
      var link = paragraph.querySelector("a");

      if (paragraph.offsetHeight > paragraph.clientHeight) {
        paragraph.classList.add("truncated");
        link.style.display = "inline";
      } else {
        link.style.display = "none";
      }
    }
  });