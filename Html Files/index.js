function sendMail() {
    var scroll = new SmoothScroll('.navbar a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
    });
    
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        let scrollButton = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    }
    
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }
    
    // Dynamically Update Footer Year
    document.querySelector('.end p').innerHTML = `Copyright ${new Date().getFullYear()} LiveLikeLocals All Rights Reserved`;
    
    // Email Subscription Form Validation
    document.querySelector('form').addEventListener('submit', function(event) {
        let emailInput = document.querySelector('input[type="email"]').value;
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailPattern.test(emailInput)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        } else {
            alert("Thank you for subscribing!");
        }
    });

    var params = {
       emailss: document.getElementById("emailss").value,
    };
  
    const serviceID = "service_lihkpz9";
    const templateID = "template_5feziqi";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("emailss").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
      })
      .catch(err=>console.log(err));
  }