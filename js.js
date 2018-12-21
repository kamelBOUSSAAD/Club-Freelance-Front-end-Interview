

   function isValid(number){
  
    var nbStr = number.toString();
    if ((nbStr.length >=5)&&(nbStr.length <=7)) 
       {
        if(!(number%5 == 0)) 
          {
            return true
          }
             else 
            {
              $('#error').html('<p>Error input : siteID divisible by 5 will not be found</p>');
             
             return false
            }
        
        
       } else
         {
            $('#error').html('<p>Error input : the length of siteID must be between 5 and 7</p>');
            return false
         }


        }





