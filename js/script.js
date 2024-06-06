function newItem() {

  let list = $('#list').sortable();
  let inputValue = $('#input').val();
  let listItem = $(`<li>${inputValue}</li>`);
  let deleteButton = $(`<button>X</button>`).addClass('delete-button');

  deleteButton.on('click', function () {
    listItem.remove();
  })

  if (inputValue === '') {
    alert('write something');
  } else {
    listItem.append(deleteButton);
    list.append(listItem);
    $('#input').val('');
  }

  listItem.on('dblclick', function () {
    listItem.toggleClass('strike');
  })


}