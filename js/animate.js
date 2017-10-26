$(function() {
    $('#box1')
        .animate({'left': '500px'})
        .animate({'top': '100px'})
        .animate({'left': '10px'})
        .animate({'left': '100px'});
    $('#box2').animate({
        'top': '500px'
    }, {
        'duration':600,
        'easing':'linear',
        'complete': function(){
            alert("終わりました");
        }
    });
});