(function(){
  const isProduction = location.hostname !== 'localhost' && location.protocol !== 'file:';

  if (!isProduction) {
      console.log("Google Analytics disabled in development");
      return;
  }

  // Ignore tracking if owner is browsing
  if (localStorage.getItem('disable_tracking') === 'true') {
      console.log("Google Analytics disabled for this user (owner)");
      return;
  }

  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-Z4LG6R6QX4";
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-Z4LG6R6QX4');
})();
