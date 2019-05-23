function boxToBottom(div,boxMae) {
    item = getItem(div);
    var boxMae = boxMae;
    $('#myTask').text(item);
    $('#idTask').val(boxMae);
    $('.overlay').show();
    $('.box-info').fadeIn().animate({
        top: '50%',
        display: 'block'
    });
}

function getItem(div) {
    var item = $('#'+div).text();
    return item;
}

function deleteItem() {
    var item = $('#idTask').val();
    $('#'+item).fadeOut(1000);
    $('.overlay').hide();
    $('.box-info').css('top', '-30%');
    $('.box-info').hide();
}

function done(item,checkbox) {
   
    if($('#'+checkbox).is(':checked')) {
        $('#'+item).css('text-decoration','line-through');
        $('#'+item).css('color','#888888');
        console.log('check');
    } else if (!$('#'+checkbox).is(':checked')) { 
        $('#'+item).css('text-decoration', 'none');
        $('#'+item).css('color','#000');
        console.log('not check');
    }
}

function trashHover(div) {
    var div = $(div).find()
}

function hide() {
    $('.overlay').hide();
    $('.box-info').css('top', '-30%');
    $('.box-info').hide();
}

$('.btn-cancelar').click(function() {
    hide();
});

$('.overlay').click(function() {
    hide();
});
