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
  $('input').keydown(function(){
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


  /*--------------------
  jQuery Chaining
  -------------------- */
  $('.notification-bar').delay(1000).slideDown().delay(1000).fadeOut();


  /*--------------------
  jQuery Hide/Show
  -------------------- */
  $('h1').hide();
  $('div.hidden').show();

  //fadein/fadeout toggle between 0 and 100% opacity
  $('p').fadeOut();
  $('p').fadeIn(8000);

  // fadeTo - let's you adjust the opacity of elements
  $('#box1').click(function(){
    $(this).fadeTo(2000, 0.75, function(){ //2000 (time), opacity: 75%;
      //animation is complete
        //slideup/slidedown
        $(this).slideUp();
    });
  }); // end of #box1.click function
  $('div.hidden').slideDown();

  //when you click the button, it will toggle.
  $('button').click(function() {
    $('#box1').slideToggle();
  });


  /*--------------------
  jQuery Animation
  -------------------- */
  $('#left').click(function() {
    $('.box').animate({
      left: '-=40px',
      fontsize: '+=2px'
    }, function() {
        //animation is complete
    }); //end of second function
  }); //end of left click

  $('#up').click(function() {
    $('.box').animate({
      top: '-=40px',
      opacity: '+=0.1'
    }, function() {
        //animation is complete
    }); //end of second function
  }); //end of up click

  $('#right').click(function() {
    $('.box').animate({
      left: '+=40px',
      opacity: '+=0.1'
    }, function() {
        //animation is complete
    }); //end of second function
  }); //end of right click

  $('#down').click(function() {
    $('.box').animate({
      top: '+=40px',
      opacity: '-=0.1'
    }, function() {
        //animation is complete
    }); //end of second function
  }); //end of down click


  /*--------------------
  jQuery CSS
  -------------------- */
  $('#circle2').css({
    'display': 'inline-block',
    'background': '#8a8d22',
    'color': 'white',
    'text-align': 'center',
    'line-height': '140px',
    'height': '140px',
    'width': '140px',
    'margin': '40px'
  }).addClass('circleShape'); //add class

  /*--------------------
  jQuery Car Race
  -------------------- */
  $('#go').click(function() {
    //build a function if the car has won the race
    function checkIfComplete() {
        if (isComplete == false) { //if no car has completed the race yet
          isComplete = true; //will be the first place
        } else {
          place = 'second'; //otherwise, it'll be second
        }
    }

    //get width of the cars
    var carWidth = $('#car1').width();

    //get width of race track
    var raceTrackWidth = $(window).width() - carWidth;

    //generate a random number between 1 and 5000 millisecond
    var raceTime1 = Math.floor((Math.random() * 5000) + 1);
    var raceTime2 = Math.floor((Math.random() * 5000) + 1);

    //set a flag variable to false by default
    var isComplete = false; //

    //set a flag variable to first by default
    var place = 'first'; //by default someone's gonna be on first place

    //animate car1
    $('#car1').animate({
      //move the car width of racetrack
      left: raceTrackWidth
    }, raceTime1, function() {
      //animation is complete

      //run a function to know if the car has completed the race
      checkIfComplete();

      //give some text feedback
      $('#raceInfo1 span').text ('Finished in' + place + 'place cnad clockedin at ' + raceTime1 + ' ' + 'milliseconds')
    }); //end of car 1 animate

    //animate car2
    $('#car2').animate({
      //move the car width of racetrack
      left: raceTrackWidth
    }, raceTime2, function() {
      //animation is complete

      //run a function to know if the car has completed the race
      checkIfComplete();

      //give some text feedback
      $('#raceInfo2 span').text ('Finished in' + place + 'place cnad clockedin at ' + raceTime2 + ' ' + 'milliseconds')
    }); //end of car 2 animate
  }); //end of car race
});

  //reset the race
  $('#reset').click(function(){
    $('.car').css('left', '0');
    $('.raceInfo span').text('');
  })
