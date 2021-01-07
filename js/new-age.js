(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

var quotes = [
'Life ki harr stage pe ek assessment zaroori hai!',
'Darling, get out of the puddle and travel to the oceans.',
'Have a spiritual goal.',
'No getting out of this world without doing any good.',
'Isn\'t love the most perfect thing to begin the day with!',
'"Great predictions begin with one imperative - you need a lot of data."',
'There was never a cloud that sun couldn\'t shine through.',
'अरे मियाँ कभी लपट भी बनिये। कब तक अंदर ही सुलगते रहेंगे।',
'If the aliens were to come to Earth, would it matter where they landed first?',
'A step, forward or backward, is enough for a day if you learnt something concrete.',
'If you\'re doing it with passion, don\'t think about the results.',
'So many times when you don\'t take a step because you\'re too afraid. Don\'t be. Push yourself.',
'The wound may not heal but your heart will.',
'Majoritaniarism may intimidate the truth.',
'"खुद-ब-खुद शाख़ लचक जाएगी, फल से भरपूर तो हो लेने दो"',
'Inhale purity. Exhale impurity. Until you get pure, inside out!',
'"जब जेब मे मनी हो तो कुंडली मे शनि होने से कोई फ़र्क नहीं पड़ता!"',
'...ho sakta hai tumhein apni keemat hi naa pata ho',
'When a metric becomes a target, it ceases to be a good metric. - Goodhart\'s Law.',
'Be around people who inspire you to think fresh and not merely follow prejudices.',
'You can\'t control the outer world. So mind your own business.',
'कोई कहानी अधूरी नहीं रहती। अंत केवल किरदारों का होता है। कहानी चल देती है अपने अंत की ओर।',
'Save first before you start spending.',
'Keep them short and crisp, conversations and dresses',
'The amount of insecurities within a person eat him/her more than the outer world will. These insecurities are the result \
\ of your own thinking. By bypassing their effect on your mind, you\'d truly do justice to yourself.'
]

function newQuote() {
  var randomNo = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote').innerHTML = quotes[randomNo];
}