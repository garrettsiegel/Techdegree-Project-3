//*****PAGELOAD

//RESETS FORM UPON PAGE LOAD
$('form')[0].reset();
//SETS FOCUS UP TO FIRST TEXT FIELD UPON PAGE LOAD
$("#name").focus();


//*****JOB ROLES

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
});


//*****T-SHIRT INFO

//INITIALLY SETS SIZE TO SMALL
$('#size').val('small').show();
//INITIALLY HIDES ALL T-SHIRT COLOR OPTIONS
$('#colors-js-puns').hide();
//ADDS RED CSS BORDER HIGHLIGHT TO DESIGN BOX
$('#design').css("border", "#45a1ff solid 2px");

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
    $('#design').css("border", "#666 solid .5px");
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
    $('#design').css("border", "#666 solid .5px");
  }
  else {
    //HIDES T-SHIRT COLOR OPTIONS BOX
    $('#colors-js-puns').hide();
    //ADDS RED CSS BORDER HIGHLIGHT TO DESIGN BOX
    $('#design').css("border", "#45a1ff solid 2px");
  }
});


//*****REGISTER FOR ACTIVITIES

//FUNCTIONS TO DIM ACTIVITIES THAT ARE AT SAME TIME UPON SELECTION
$('.activities').on('change', () => {
  if ($('.activities input').eq(1).is(':checked')) {
     $('.activities input').eq(3).attr('disabled', true);
     $('.activities label').eq(3).css("color", "dimgray");
   } else if ($('.activities input').eq(3).is(':checked')) {
        $('.activities input').eq(1).attr('disabled', true);
        $('.activities label').eq(1).css("color", "dimgray");
   } else {
     $('.activities input').filter(':eq(1), :eq(3)').attr('disabled', false);
     $('.activities label').filter(':eq(1), :eq(3)').css("color", "white");
   }
});

$('.activities').on('change', () => {
  if ($('.activities input').eq(2).is(':checked')) {
     $('.activities input').eq(4).attr('disabled', true);
     $('.activities label').eq(4).css("color", "dimgray");
   } else if ($('.activities input').eq(4).is(':checked')) {
        $('.activities input').eq(2).attr('disabled', true);
        $('.activities label').eq(2).css("color", "dimgray");
   } else {
     $('.activities input').filter(':eq(2), :eq(4)').attr('disabled', false);
     $('.activities label').filter(':eq(2), :eq(4)').css("color", "white");
   }
});


//SETS SUM TO ZERO
let $sum = 0;
//TEXT SPAN FOR TOTAL AMOUNT
const $total = $('<span>Total: $</span>');
//SPAN FOR SUM AMOUNT
let $sumText = $('<span id="sum"></span>');
//APPENDS SUM AMOUNT TO SPAN
$sumText.append($sum);
//APPENDS SUM SPAN TO TOTAL SPAN
$total.append($sumText);
//CSS TO BOLD TOTAL AND SUM TEXT
$total.css("font-weight", "bold");
//APPPENDS TOTAL TEXT TO END OF ACTIVITIES CLASS
$('.activities').append($total);

//TOTAL AMOUNT FUNCTION FOR CHOSEN ACTIVITIES
$('.activities input').on('change', event => {
  //SETS EVENT TARGET AS A VARIABLE
  const $eventTarget = $(event.target);
  //VARIABLE TO GET THE EVENT TARGET'S NAME ATTRIBUTE
  const $name = $eventTarget.attr('name');
  //CONDITION TO SEE IF CHECKBOX IS CHECKED
  if ($eventTarget.is(':checked')) {
      //IF CHECKED AND NAME ATTRIBUTE IS "ALL"
      if ($name === 'all') {
      //ADD $200 TO SUM
      $sum += 200;
      //IF CHECKED AND NAME ATTRIBUTE IS NOT "ALL"
      } else {
      //ADD $100 TO SUM
      $sum += 100;
    //IF NOT CHECKED
  }} else {
      //IF NOT UNCHECKED AND NAME ATTRIBUTE IS "ALL"
      if ($name === 'all') {
      //REDUCE $200 FROM SUM
      $sum -= 200;
      //IF NOT CHECKED AND NAME ATTRIBUTE IS NOT "ALL"
    } else {
      //REDUCE $100 FROM SUM
      $sum -= 100;
    }
  }
  //POPULATE SUM CLASS WITH THE TEXT CONTAINING CURRENT SUM AMOUNT
  $('#sum').text($sum);
});


//*****PAYMENT INFO

//CREDIT CARD OPTION VARIABLE
const $ccOption = $('#credit-card');
//PAYPAL OPTION VARIABLE
const $paypalOption = $('#credit-card').next();
$paypalOption.css("color", "gainsboro");
//BITCOIN OPTION VARIABLE
const $bitcoinOption = $('#credit-card').next().next();
$bitcoinOption.css("color", "gainsboro");
//DISABLES THE "SELECT PAYMENT METHOD OPTION"
$('#payment option').eq(0).prop('disabled', true);
//SETS CREDIT CARD AS DEFAULT PAYMENT DROP-DOWN METHOD
$('#payment').val('credit card').show();
//INITIAL HIDE OF PAYPAL INFO
$paypalOption.hide();
//INITIAL HIDE OF BITCOIN INFO
$bitcoinOption.hide();


//FUNCTION FOR CHANGES TO THE PAYMENT METHOD DROP-DOWN
$('#payment').on('change', () => {
  //SWITCH CONDITIONAL TO CHECK VALUE OF PAYMENT METHOD
  switch ($('#payment').val()) {
    //WHEN CREDIT CARD SELECTED, HIDE OTHER METHODS, SHOW CREDIT CARD INFO
    case 'credit card':
    $paypalOption.hide();
    $bitcoinOption.hide();
    $ccOption.fadeIn();
    break;
    //WHEN PAYPAL SELECTED, HIDE OTHER METHODS, SHOW PAYPAL INFO
    case 'paypal':
    $ccOption.hide();
    $bitcoinOption.hide();
    $paypalOption.fadeIn();
    break;
    //WHEN BITCOIN SELECTED, HIDE OTHER METHODS, SHOW BITCOIN
    case 'bitcoin':
    $ccOption.hide();
    $paypalOption.hide();
    $bitcoinOption.fadeIn();
    break;
  }
});


//*****VALIDATION

//*****BASIC INFO VALIDATION VARIABLES
const $submitButton = $('button');
const $buttonErrorSpan = $('<span class="buttonError">Please fix errors before submitting form.</span>');
$submitButton.after($buttonErrorSpan);
$buttonErrorSpan.hide();
const $nameInput = $('#name');
const $nameSpan = $('<span class="nameError">Please enter only alphabetic characters.</span>');
$nameInput.after($nameSpan);
$nameSpan.hide();
const $nameSpan2 = $('<span class="nameError">Please enter a name.</span>');
$nameInput.after($nameSpan2);
const $mailInput = $('#mail');
const $mailSpan = $('<span class="mailError">Please enter a valid email address.</span>');
$mailInput.after($mailSpan);

//*****NAME INPUT VALIDATION
$nameInput.keyup( () => {
  const $nameVal = $nameInput.val();
  const $nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)?(\s)?$/i;
  if ($nameVal != "") {
    $nameSpan2.fadeOut();
    if (!$nameVal.match($nameRegex)) {
      $nameSpan.fadeIn();
    } else {
      $nameSpan.fadeOut();
    }
  } else {
    $nameSpan.fadeOut();
    $nameSpan2.fadeIn();
  }
});

//*****MAIL INPUT VALIDATION
$mailInput.keyup( () => {
  const $mailVal = $mailInput.val();
  const $mailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
  if (!$mailVal.match($mailRegex)) {
    $mailSpan.fadeIn();
  } else {
    $mailSpan.fadeOut();
  }
});

//*****CHECKBOX VALIDATION
const $checkBox = $('.activities');
const $checkBoxSpan = $('<span class="checkBoxError">Please select at least one option.</span>');
$checkBox.after($checkBoxSpan);

$checkBox.on('change', e => {
  if ($('input[type=checkbox]:checked').length) {
    $checkBoxSpan.fadeOut();
  } else {
    $checkBoxSpan.fadeIn();
  }
});

//*****PAYMENT VALIDATION
const $expMonth = $('#exp-month');
const $paymentMeth = $('#payment');
const $ccNum = $('#cc-num');
const $ccNumSpan = $('<span class="paymentError">Please enter a valid credit card number.</span>');
const $ccNumSpan2 = $('<span class="paymentError">Please enter a credit card number that is between 13 and 16 digits.</span>');
$expMonth.prev().before($ccNumSpan);
$expMonth.prev().before($ccNumSpan2);
$ccNumSpan2.hide();

    $ccNum.keyup( () => {
      if ($paymentMeth.val('credit card')) {
        const $ccNumVal = $('#cc-num').val();
        const $ccNumRegex = /^\d{13,16}$/;
        if ($ccNumVal != "") {
          $ccNumSpan.fadeOut();
          if (!$ccNumVal.match($ccNumRegex)) {
            $ccNumSpan2.fadeIn();
          } else {
            $ccNumSpan2.fadeOut();
          }
        } else {
          $ccNumSpan2.fadeOut();
          $ccNumSpan.fadeIn();
        }
      }
    });

    const $zip = $('#zip');
    const $zipSpan = $('<span class="paymentError">Please enter a valid 5 digit zip code.</span>');
    $expMonth.prev().before($zipSpan);

        $zip.keyup( () => {
          if ($paymentMeth.val('credit card')) {
            const $zipVal = $('#zip').val();
            const $zipRegex = /^\d{5}$/;
            if ($zipVal != "") {
              $zipSpan.fadeOut();
              if (!$zipVal.match($zipRegex)) {
                $zipSpan.fadeIn();
              } else {
                $zipSpan.fadeOut();
              }
            } else {
              $zipSpan.fadeOut();
              $zipSpan.fadeIn();
            }
          }
        });

        const $cvv = $('#cvv');
        const $cvvSpan = $('<span class="paymentError">Please enter a valid 3 digit CVV number.</span>');
        $expMonth.prev().before($cvvSpan);

            $cvv.keyup( () => {
              if ($paymentMeth.val('credit card')) {
                const $cvvVal = $('#cvv').val();
                const $cvvRegex = /^\d{3}$/;
                if ($cvvVal != "") {
                  $cvvSpan.fadeOut();
                  if (!$cvvVal.match($cvvRegex)) {
                    $cvvSpan.fadeIn();
                  } else {
                    $cvvSpan.fadeOut();
                  }
                } else {
                  $cvvSpan.fadeOut();
                  $cvvSpan.fadeIn();
                }
              }
            });

//*****BUTTON VALIDATION
$submitButton.on('click', e => {

const $nameVal = $nameInput.val();
const $mailVal = $mailInput.val();
const $ccNumVal = $('#cc-num').val();
const $mailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
const $ccNumRegex = /^\d{13,16}$/;
const $zipVal = $('#zip').val();
const $zipRegex = /^\d{5}$/;
const $cvvVal = $('#cvv').val();
const $cvvRegex = /^\d{3}$/;

if ($nameVal == "") {
  e.preventDefault();
  $buttonErrorSpan.fadeIn();
} else {
  $buttonErrorSpan.fadeOut();
}
if (!$mailVal.match($mailRegex)) {
  e.preventDefault();
  $buttonErrorSpan.fadeIn();
} else {
  $buttonErrorSpan.fadeOut();
}
if (!$('input[type=checkbox]:checked').length) {
  e.preventDefault();
  $buttonErrorSpan.fadeIn
  $buttonErrorSpan.fadeOut();
}
if ($paymentMeth.val() == 'credit card') {
if ($ccNumVal == "") {
  e.preventDefault();
  $buttonErrorSpan.fadeIn();
}
else {
  $buttonErrorSpan.fadeOut();
}
if ($zipVal == "") {
  e.preventDefault();
  $buttonErrorSpan.fadeIn();
}
else {
  $buttonErrorSpan.fadeOut();
}
  if ($cvvVal == "") {
  e.preventDefault();
  $buttonErrorSpan.fadeIn();
}
else {
  $buttonErrorSpan.fadeOut();
}
}
});
