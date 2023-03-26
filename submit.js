window.onload = function() {
    var message = document.getElementsByClassName("message")[0];
    var subscription = document.getElementsByClassName("subscribed")[0];
  
    function showMessage() {
      alert("The form is now submitted. We will contact you on this email soon!");
    }

    function showSubscribed() {
        alert("Thanks for signing up to our mailing list..");
      }
  
    message.addEventListener('click', showMessage, false);
    subscription.addEventListener('click', showSubscribed, false);
  };