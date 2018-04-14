$('.lecture').hide();
$('.button').click(function(){
    var buttonIndex = $('.button').index(this);
    var lectureAtIndex = $('.lecture')[buttonIndex];
    console.log();
    if(lectureAtIndex.style.display == 'none'){
        $(`.lecture:eq(${buttonIndex})`).slideDown()
        return
    }

    $(`.lecture:eq(${buttonIndex})`).slideUp()

})