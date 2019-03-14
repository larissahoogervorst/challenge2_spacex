function achtergrond(){
    var n = new Date().getHours();
    if (n > 21 || n < 9){
            //Tussen 21.00 en 9.00 uur wordt het nacht thema weergegeven
      document.body.className = "night";}
    
    else if(n > 9 || n < 21){
           //De rest van de tijd wordt het dag thema weergegeven
      document.body.className = "day";}
};

achtergrond();
