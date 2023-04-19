window.onload = function() {
    var message = document.getElementsByClassName("message")[0];  // targeting submit element
    var subscription = document.getElementsByClassName("subscribed")[0]; //targeting subscribe element
  
    function showMessage() {
      alert("The form is now submitted. We will contact you on this email soon!");   //Shows this alert when submit clicked
    }

    function showSubscribed() {
        alert("Thanks for signing up to our mailing list..");   //Shows this alert when subscribe clicked
      }
  
    message.addEventListener('click', showMessage, false);   // when submit is clicked
    subscription.addEventListener('click', showSubscribed, false);  //when subscribe is clicked
  };