
//Start form validation for booking form
function validation(){
  var n,num,date;
  n=document.getElementById('name').value;
  num=document.getElementById('number').value;
  date=document.getElementById('bookingdate').value;
    // if(n === ' ' || num ===' ' || date ===' ')
    //     alert("Please fill out the form");
    // else
    //     alert("Reservation completed!");  
    if(n=== ' ' || n===null)
      alert("Please enter your name");
    else if(num.length===0)  
      alert("Please enter the number of guests");
    else if(date.length===0)
      alert("Please enter a date");
    else
      alert("Reservation compelted!");
}
//End form validation for booking form

//Start form validation for review form
function validation1(){
  var n,e,c;
  n=document.getElementById('name1').value;
  e=document.getElementById('email1').value.length;
  c=document.getElementById('comment1').value.length;
  if(n=== ' ' || n===null)
      alert("Please enter your name");
  else if(e=== 0)  
      alert("Please enter your email");
  else if(c===0)
      alert("Please enter a comment");
  else
    alert("Form completed!");
}
//End form validation for review form


//Start Slideshow for reviews section
var swiper = new Swiper(".review_slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",        
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });
//End Slideshow for reviews section


//Start moving the position of icons when hovering over them(footer)

  $("i#icon").hover(
    function(){           
      $(this).css('margin-left', '30px')
    }
  );

// End moving the position of icons when hovering over them(footer)