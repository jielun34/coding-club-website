//JQuery
$(document).ready(function () {

  $('.button1-1').click(function() {
    $('.button1-1').hide();
    $('.button1-2').show();
    $('#image1').slideDown(500);

    var image1 = anime({
      targets: '#image1',
      translateX: 250,
      easing: [.91,-0.54,.29,1.56]
    });

  })

  $('.button1-2').click(function() {
    $('.button1-2').hide();
    $('.button1-1').show();
    $('#image1').slideUp(500);

    var image1 = anime({
      targets: '#image1',
      translateX: -250,
      easing: [.91,-0.54,.29,1.56]
    });
  })

  //Animate.js
  var basicTimeline = anime.timeline();
  basicTimeline
  .add({
    targets: '#timeline',
    opacity: [{ value: [0, 1], duration: 1000, easing: 'easeOutQuad' }],
    right: '25%',
    easing: 'easeOutExpo',
  });

});
