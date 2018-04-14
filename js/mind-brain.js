$(function(){

})
$('.lecture').hide();
// function openText(index){
//     console.log('clicked', index)
//     // $('.lecture').show()
//     console.log(this.index)
//     var lectureAtIndex = $('.lecture')[index];
//     console.log(lectureAtIndex);
//     if(lectureAtIndex.style.display == 'block'){

//         lectureAtIndex.style.display = 'none';

//         return
//     }

//     lectureAtIndex.style.display = 'block';
    
// }

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