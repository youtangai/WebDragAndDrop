var clicking = false;

$(function() {
    $('.box').mousedown(MouseDown);
    $(document).mouseup(MouseUp);
    $('.box').mousemove(MouseMove);
});

function MouseDown(){
    clicking = true;
    $('#clickstatus').text("mousedown");
    $(this).addClass("drag");
}

function MouseUp(){
    clicking = false;
    $('#clickstatus').text("mouseup");
    $('#movestatus').text("released");
    $('.drag').removeClass("drag")
}

function MouseMove(event){
    if (!clicking) return;
    var drag = $('.drag');
    var offset = drag.offset();
    $('#movestatus').text("mouse moving  " + event.pageX + "," + event.pageY + " offset" + offset.left + "," + offset.top);
    drag.offset({top: event.pageY-45, left: event.pageX-45})
}