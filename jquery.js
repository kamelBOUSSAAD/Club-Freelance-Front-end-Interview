function getBloges(siteID) {
  $("#blog").remove();

  $.ajax({
    url: "http://clubfreetst.herokuapp.com/blogs/" + siteID,
    data: {
      format: "html"
    },
    error: function() {
      $("#blog").html("<p>An error has occurred</p>");
    },
    dataType: "json",

    success: function(itemData) {
      $("#error").hide();

      $("#note").html("<h2> Blogger : " + itemData.blogger + "</h2> ");
      $("#note").append("<h2> Title : " + itemData.title + "</h2>");

      $("#note")
        .append('<h2 class="note-title"> Notes </h2>')
        .text();
      for (var i = 0; i <= itemData.notes.length - 1; i++) {
        var id = itemData.notes[i].id;
        var title = itemData.notes[i].title;

        $("#note").append(`<li> Title : ` + title + ` </li>`);
        $("#note").append(
          `<button class="delete-button" onClick="delete_item('` +
            id +
            `')">Delete  X </button> `
        );
      }
    },
    type: "GET"
  });
}

function delete_item(id) {
  jQuery.ajax({
    url: "http://clubfreetst.herokuapp.com/notes/" + id,
    type: "DELETE",
    data: { _method: "delete" },
    success: function(data) {
      getBloges(document.getElementById("siteID").value);
    },
    error: function(err) {
      $("#delete").append("<h3>" + JSON.stringify(err) + "<h3> ");
    }
  });
}
