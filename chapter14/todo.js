$(document).ready(function (e) {

  $('#add-todo').button({
    icons: {
      primary: "ui-icon-circle-plus"
    }
  }).click(function () {
    $('#new-todo').dialog('open')
  })

  $('#new-todo').dialog({
    modal: true,
    autoOpen: false,
    buttons: {
      "Add task": function () {

      },
      "Cancel": function () {
        $(this).dialog('close')
      }
    }
  })

}); // end ready