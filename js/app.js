
$(window).scroll(function () { 
  let secroll = $(window).scrollTop();
  let nav = $('#navbar')
  let headerS = $('#header-section').offset().top;
  let firestSection = $('#firest-section').offset().top-200;
  let secendSection = $('.seacend-section').offset().top-200;
  let tiredSection = $('.tired-section').offset().top-200;
  let fouthSection = $('.fourth-section').offset().top-200;
  let fiveSection = $('.fiveth-section').offset().top-200;
  let sixthSection =$('.sixth-section').offset().top;
  ///////////////////
  if(secroll > headerS)
  {
    $('.header-section1').css('transform' , 'translateX(0%)').css('opacity' , '1')
  }
//////////////////////////////
  if(secroll > firestSection)
  {
    nav.addClass('bg-info').removeClass('bg-transparent');
    $('.fa-custoome').fadeIn(500);
    $('.firest-section1').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.firest-section2').css('transform' , 'translateY(20%)').css('opacity' , '1')
    $('.firest-section3').css('transform' , 'translateY(0%)').css('opacity' , '1')
  }
  else
  {
    nav.addClass('bg-transparent').removeClass('bg-info');
    $('.fa-custoome').fadeOut(500);
    $('.firest-section1').css('transform' , 'translateY(70%)').css('opacity' , '0')
    $('.firest-section2').css('transform' , 'translateY(70%)').css('opacity' , '0')
    $('.firest-section3').css('transform' , 'translateY(70%)').css('opacity' , '0')
  }
  ////////////////////////////////////
  if(secroll > secendSection)
  {
    $('.seacend-section1').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.seacend-section2').css('transform' , 'translateY(0%)').css('opacity' , '1')
  }
  else
  {
    $('.seacend-section1').css('transform' , 'translateY(100%)').css('opacity' , '0')
    $('.seacend-section2').css('transform' , 'translateY(100%)').css('opacity' , '0')
  }
  ////////////////
  if(secroll > tiredSection)
  {
    $('.tired-section3').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.tired-section2').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.tired-section1').css('transform' , 'translateY(0%)').css('opacity' , '1')
  }
  else
  {
    $('.tired-section3').css('transform' , 'translateY(120%)').css('opacity' , '0')
    $('.tired-section2').css('transform' , 'translateY(130%)').css('opacity' , '0')
    $('.tired-section1').css('transform' , 'translateY(130%)').css('opacity' , '0')
  }
  ////////////////////////
  if (secroll > fouthSection)
  {
    $('.fourth-section1').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.fourth-section2').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.fourth-section3').css('transform' , 'translateY(0%)').css('opacity' , '1')
  }
  else
  {
    $('.fourth-section1').css('transform' , 'translateY(150%)').css('opacity' , '0')
    $('.fourth-section2').css('transform' , 'translateY(100%)').css('opacity' , '0')
    $('.fourth-section3').css('transform' , 'translateY(-120%)').css('opacity' , '0')
  }
  //////////////////////////////////////
  if(secroll > fiveSection)
  {
    $('.fiveth-section1').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.fiveth-section2').css('transform' , 'translateY(0%)').css('opacity' , '1')
  }
  else
  {
    $('.fiveth-section1').css('transform' , 'translateY(100%)').css('opacity' , '0')
    $('.fiveth-section2').css('transform' , 'translateY(100%)').css('opacity' , '0')
  }
//////////////////////////////
  if(secroll > sixthSection)
  {
    $('.sixth-section1').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.sixth-section2').css('transform' , 'rotate(0deg)', 'scale(1)').css('opacity' , '1')
    $('.sixth-section3').css('transform' , 'rotate(0deg)' , 'scale(1)').css('opacity' , '1')
    $('.sixth-section4').css('transform' , 'rotate(0deg)' , 'scale(1)').css('opacity' , '1')
  }
  else
  {
    $('.sixth-section1').css('transform' , 'translateY(0%)').css('opacity' , '0')
    $('.sixth-section2').css('transform' , 'rotate(360deg)', 'scale(0.1)').css('opacity' , '0')
    $('.sixth-section3').css('transform' , 'rotate(360deg)' , 'scale(0.1)').css('opacity' , '0')
    $('.sixth-section4').css('transform' , 'rotate(360deg)' , 'scale(0.1)').css('opacity' , '0')
  }
});


$('a').click(function()
{
  let aHref =  (this).attr('href');
  let offserHref = $(aHref).offset().top

  $('body , html').animate({scrollTop:offserHref} , 600)
})

$('.fa-custoome').click(function()
{
  $('body,html').animate({scrollTop:'0'} , 600)
})


$('.btn1').click( function()
{
  $('.fa1').toggleClass('fa-plus2');
  $('#text1').slideToggle(500);
})

$('.btn2').click( function()
{
  $('.fa2').toggleClass('fa-plus2');
  $('#text2').slideToggle(500);
})

$('.btn3').click( function()
{
  $('.fa3').toggleClass('fa-plus2');
  $('#text3').slideToggle(500);
})

$('.btn4').click( function()
{
  $('.fa4').toggleClass('fa-plus2');
  $('#text4').slideToggle(500);
})

$('.btn5').click( function()
{
  $('.fa5').toggleClass('fa-plus2');
  $('#text5').slideToggle(500);
})

$('.btn6').click( function()
{
  $('.fa6').toggleClass('fa-plus2');
  $('#text6').slideToggle(500);
})

$('.btn7').click( function()
{
  $('.fa7').toggleClass('fa-plus2');
  $('#text7').slideToggle(500);
})

$('.btn8').click( function()
{
  $('.fa8').toggleClass('fa-plus2');
  $('#text8').slideToggle(500);
})

$('.btn9').click( function()
{
  $('.fa9').toggleClass('fa-plus2');
  $('#text9').slideToggle(500);
})

$('.btn10').click( function()
{
  $('.fa10').toggleClass('fa-plus2');
  $('#text10').slideToggle(500);
})