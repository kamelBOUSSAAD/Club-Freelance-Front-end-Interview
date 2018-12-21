
function getBloges(siteID){
    $.ajax({
        url: 'http://clubfreetst.herokuapp.com/blogs/'+siteID,
        data: {
           format: 'html'
        },
        error: function() {
           $('#blog').html('<p>An error has occurred</p>');
        },
        dataType: 'json',

        success: function(itemData) {
           
            $('#blog').append('<h2> Blogger : '+itemData.blogger+'</h2> ')
            $('#blog').append('<h2> Title : '+itemData.title+'</h2>')
           
            $('#note').append('<h2> Notes </h2>')
            for(var i=0;i<=itemData.notes.length-1;i++)
            {
               var id = itemData.notes[i].id;
               var title = itemData.notes[i].title;
           
               $('#note').append('<tr>')
               $('#note').append('<td> Title : '+title+' </td>')
               $("#note").append(`<td><button onCick="deleteNote(${id})">delete</button></td>`)
               $('#note').append('</tr>')
              }   
            },
        type: 'GET'
     });
    } 
   



 

 
function deleteNote(id){
   $.ajax({
      url: 'http://clubfreetst.herokuapp.com/notes/'+id,
      error: function() {
      $('#delete').append('<h3>erruer<h3> ')
      },
      
      type: 'DELETE',
      success: function(res) {
         $('#delete').append('<h3>OK <h3> ')
      },
      error: function() {
      $('#delete').append('<h3>erruer<h3> ')
      }
   })                 


}