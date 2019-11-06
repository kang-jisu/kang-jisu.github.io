window.onscroll = function() {scrollFunction()};




function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      var ori = document.getElementById("header").className;
      if(ori!=="undifined"){
      var cha = ori.replace('etc-header-top',' header-shrink');
      document.getElementById("header").className = cha;
      }
      
        
  } else {
    var ori = document.getElementById("header").className;
    var cha = ori.replace(' header-shrink','etc-header-top');
    var ori = document.getElementById("header").className = cha;


  }
}