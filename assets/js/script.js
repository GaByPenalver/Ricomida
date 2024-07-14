
$(document).ready(function () {
    $('#enviarCorreo').click(function () {
        alert('El correo fue enviado correctamente...');
    });
});


$(document).ready(function () {
    $('h6:contains("INGREDIENTES")').on('dblclick', function () {
        $(this).css('color', 'red');
    });

    $('h6:contains("PREPARACIÓN")').on('dblclick', function () {
        $(this).css('color', 'red');
    });
});



$(document).ready(function () {
    $('.card-title').click(function () {
        $(this).siblings('.card-text').toggle();
    });
})