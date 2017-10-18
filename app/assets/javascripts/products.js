$('.js-more').on('click', function () {
  let id = $(this).data('id')
  let description = $('#body-'+id)[0].innerText
  if ($('#body-'+id+' p')[0].innerText.length === 30) {

    $.get(id + '/description', function(data) {
      $('#body-'+id+' p').text(data)
    })
    $(`button[data-id='${id}']`)[0].innerText = 'Less...'
  } else {

    $('#body-'+id+' p')[0].innerText = description.slice(0,27) + '...'
    $(`button[data-id='${id}']`)[0].innerText = 'More...'
  }
})
