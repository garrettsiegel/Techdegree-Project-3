$('form')[0].reset();
//SETS FOCUS UP TO FIRST TEXT FIELD UPON PAGE LOAD
$("#name").focus();


//HIDES OTHER JOB TITLE UPON PAGE LOAD
$('.other').hide();
//ON CHANGE FUNCTION FOR OTHER JOB TITLE
$('#title').on('change', () => {
  //IF JOB SELECTOR IS EQUAL TO OTHER
  if ($('#title').val() == "other") {
    //SHOW OTHER JOB INPUT BOX
    $('.other').slideDown();
  } else {
    //HIDE OTHER JOB INPUT BOX
    $('.other').slideUp();
  }
})

$('#size').val('small').show();
//INITIALLY HIDES ALL T-SHIRT COLOR OPTIONS
$('#colors-js-puns').hide();
//ADDS RED CSS BORDER HIGHLIGHT TO DESIGN BOX
$('#design').css("border", "red solid 2px");
//FUNCTION FOR WHEN T-SHIRT DESIGN OPTION IS CHANGED
$('#design').on('change', () => {
  //IF JS PUNS OPTION IS SELECTED
  if ($('#design option').eq(1).is(':selected')) {
    //SHOW COLORS BOX
    $('#colors-js-puns').show();
    //SHOW ALL COLOR OPTIONS
    $('#colors-js-puns option').show();
    //HIDES HEART JS COLOR OPTIONS
    $('#colors-js-puns option').slice(3,6).hide();
    //SHOWS INITIAL CHOICE AS FIRST COLOR OPTION
    $('#color').val('cornflowerblue').show();
    //REMOVES BORDER HIGHLIGHT
    $('#design').css("border", "none");
  }
  //IF HEART JS OPTION IS SELECTED
  else if ($('#design option').eq(2).is(':selected')) {
    //SHOWS COLOR BOX
    $('#colors-js-puns').show();
    //SHOW ALL COLOR OPTIONS
    $('#colors-js-puns option').show();
    //HIDES JS PUNS COLOR OPTIONS
    $('#colors-js-puns option').slice(0,3).hide();
    //SHOWS INITIAL CHOICE AS FIRST COLOR OPTION
    $('#color').val('tomato').show();
    //REMOVES BORDER HIGHLIGHT
    $('#design').css("border", "none");
  }
  else {
    //HIDES T-SHIRT COLOR OPTIONS BOX
    $('#colors-js-puns').hide();
    //ADDS RED CSS BORDER HIGHLIGHT TO DESIGN BOX
    $('#design').css("border", "red solid 2px");
  }
});




$('.activities input').attr('value', 100);
$('.activities input').eq(0).attr('value', 200);

$('.activities').on('change', () => {
  if ($('.activities input').eq(1).is(':checked')) {
     $('.activities input').eq(3).attr('disabled', true);
     $('.activities label').eq(3).css("color", "lightgray");
   } else if ($('.activities input').eq(3).is(':checked')) {
        $('.activities input').eq(1).attr('disabled', true);
        $('.activities label').eq(1).css("color", "lightgray");
   } else {
     $('.activities input').filter(':eq(1), :eq(3)').attr('disabled', false);
     $('.activities label').filter(':eq(1), :eq(3)').css("color", "black");
   }
});

$('.activities').on('change', () => {
  if ($('.activities input').eq(2).is(':checked')) {
     $('.activities input').eq(4).attr('disabled', true);
     $('.activities label').eq(4).css("color", "lightgray");
   } else if ($('.activities input').eq(4).is(':checked')) {
        $('.activities input').eq(2).attr('disabled', true);
        $('.activities label').eq(2).css("color", "lightgray");
   } else {
     $('.activities input').filter(':eq(2), :eq(4)').attr('disabled', false);
     $('.activities label').filter(':eq(2), :eq(4)').css("color", "black");
   }
});


// let $sum = 0;
// const $total = $('<div id="total"></div>');
// $total.append("<span>Total: $" + $sum + "</span>");
// $total.css("font-weight", "bold");
// $('.activities').append($total);
// $(".activities input").change(function() {
//     if($('.activities input').val(':checked')) {
//         $sum += parseFloat($(this).val());
//     } else {
//         $sum -= parseFloat($(this).val());
//     }
// return $sum;
// $('.activities').append($total);
// });


let $sum = 0;
const $total = $('<div id="total"></div>');
$total.append("<span>Total: $</span>");
$total.css("font-weight", "bold");
var $checkedBox = $(":checkbox:checked");
$('.activities input').on('change', () => {
  if ($checkedBox) {
    $sum += parseFloat($(this).val());
  } else {
    $sum -= parseFloat($(this).val());
  }
  return $sum;
  $total.append('$sum');
});
