//function call to initiate jQuery

//this funtion waits for the document to be ready. This is the document.ready event
$(function() {
  /*--------------------
  basic jQuery
  -------------------- */
  $('button').click(function(){
    $('#box').fadeOut(1000);
  });

  /*--------------------
  jQuery selectors
  -------------------- */
  $('h2, h3, h4').css('border', 'solid 1px red');
  $('div#container').css('border', 'solid 1px red');
  $('p.lead').css('border', 'solid 1px red');

  //pseudo selectors
  $('li:first').css('border', 'solid 1px red');
  $('p:even').css('border', 'solid 1px red');

  //descendant selectors
  $('div em').css('border', 'solid 1px red');

  //child selectors
  $('div > p').css('border', 'solid 1px red');

  //jQuery selector - this selects all header
  $(':header').css('border', 'solid 1px red');

  //select all elements that has "Brad" on it
  $(':contains("Brad")').css('border', 'solid 1px red');

  /*--------------------
  jQuery Event
  -------------------- */
  //click
  $('#box').click(function () {
    alert('You just clicked the box');
  });

  //blur
  $('input').blur(function(){
     if ($(this).val() == '') {
       $(this).css('border', 'solid 1px red');
       $('#box').text('Forgot to add text?');
     }
  });

  //keydown
  $('input').keydown(funtion(){
    if ($(this).val() != '') {
      $(this).css('border', 'solid 1px #777');
      $('#box').text('Thanks for that');
    }
  });

  //hover
  $('#box').hover(function(){
    //this is the hover in
    $(this).text('you hovered in');
  }, function(){
    //this is the hover out
    $(this).text('you hovered out');
  });

});
