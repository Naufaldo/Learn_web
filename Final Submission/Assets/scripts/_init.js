function fungsi() {
    document.getElementById("mydropup").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropups = document.getElementsByClassName("dropup-content");
      var i;
      for (i = 0; i < dropups.length; i++) {
        var opendropup = dropups[i];
        if (opendropup.classList.contains('show')) {
          opendropup.classList.remove('show');
        }
      }
    }
  }