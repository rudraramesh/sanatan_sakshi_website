$(document).ready(function(){
    $(".content .tab_content").hide();
    $(".content .tab_content:first-child").show();

    $(".tabs ul li").click(function(){
      
      $(".tabs ul li").removeClass("actives");
      $(this).addClass("actives");
      
      var current_tab = $(this).attr("data-list");
      $(".content .tab_content").hide();
      $("."+current_tab).show();
    })
});