$(document).ready(function(){

    $('#open-mantras').click(function(){
        $('.mantra-containers').css('transform','scale(1)');
    });

    $('#close-poup').click(function(){
        $('.mantra-containers').css('transform','scale(0)');
    });

});



// nepali artha button 
var i=0
function showNepali(){
    if(!i){
        document.querySelector('.np-artha-text').style.display = 'inline';
        document.querySelector('.np-ar-h').style.display = 'inline';
        document.querySelector('#read-less').innerHTML= "Read Less";

        i=1;

    }
    else{
        document.querySelector('.np-artha-text').style.display = 'none';
        document.querySelector('.np-ar-h').style.display = 'none';
        document.querySelector('#read-less').innerHTML= "नेपाली अर्थ:"; 
        i=0;
    }
    
}

// jquery filter in post

$('.post-items').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

  $('.filter-post ul li').click(function(){
    $('.filter-post ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.post-items').isotope({
        filter:selector
    });
    return false;
  });
