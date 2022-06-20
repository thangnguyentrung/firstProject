window.onload = function() {
    var seconds = 00;
    var tens = 00;
    var appendSeconds  = document.getElementById('seconds');
    var appendTens = document.getElementById('tens');
    var button_start =  document.getElementById('button-start');
    var button_stop =  document.getElementById('button-stop');
    var button_reset =  document.getElementById('button-reset');
    var Interval;

    button_start.onclick = function() {
         Interval = setInterval(startTimer, 10);
      }
      
      button_stop.onclick = function() {
           clearInterval(Interval);
      }
      
    
      button_reset.onclick = function() {
         clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
      }

      function startTimer () {
        tens++; 
        
        if(tens <= 9){
          appendTens.innerHTML = "0" + tens;
        }
        
        if (tens > 9){
          appendTens.innerHTML = tens;
          
        } 
        
        if (tens > 99) {
          console.log("seconds");
          seconds++;
          appendSeconds.innerHTML = "0" + seconds;
          tens = 0;
          appendTens.innerHTML = "0" + 0;
        }
        
        if (seconds > 9){
          appendSeconds.innerHTML = seconds;
        }
      
      }
      
    
    }
