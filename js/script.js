//TEAM TREEHOUSE TECHDEGREE PROJECT 3, INTERACTIVE FORM, BY: GARRETT SIEGEL





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

//VARIABLE FOR SUBMIT BUTTON
const $submitButton = $('button');
//VARIABLE TO SET ERROR SPAN FOR SUBMIT BUTTON
const $buttonErrorSpan = $('<span class="buttonError">Please fix errors above before submitting form.</span>');
//PLACE SUBMIT BUTTON ERROR AFTER SUBMIT BUTTON
$submitButton.after($buttonErrorSpan);
//HIDE SUBMIT BUTTON ERROR
$buttonErrorSpan.hide();
//VARIABLE FOR NAME INPUT
const $nameInput = $('#name');
//VARIABLE TO SET ERROR SPAN FOR NAME INPUT
const $nameSpan = $('<span class="nameError">Please enter only alphabetic characters.</span>');
//PLACE NAME ERROR AFTER NAME INPUT
$nameInput.after($nameSpan);
//HIDE NAME INPUT ERRROR
$nameSpan.hide();
//VARIABLE TO SET BLANK NAME ERROR SPAN FOR NAME INPUT
const $nameSpan2 = $('<span class="nameError">Please enter a name.</span>');
//PLACE SECOND NAME ERROR AFTER NAME INPUT
$nameInput.after($nameSpan2);
//VARIABLE FOR EMAIL INPUT
const $mailInput = $('#mail');
//VARIABLE TO SET ERROR SPAN FOR EMAIL INPUT
const $mailSpan = $('<span class="mailError">Please enter a valid email address.</span>');
//PLACE EMAIL ERROR AFTER EMAIL INPUT
$mailInput.after($mailSpan);

//*****NAME INPUT VALIDATION
//FUNCTION FOR NAME INPUT VALIDATIONI UPON INPUT KEYUP
$nameInput.keyup( () => {
  //VARIABLE FOR NAME INPUT VALUE
  const $nameVal = $nameInput.val();
  //NAME INPUT REGULAR EXPRESSION
  const $nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)?(\s)?$/i;
  //CONDITIONAL STATEMENT IF NAME VALUE IS NOT EMPTY
  if ($nameVal != "") {
    //IF EMPTY HIDE BLANK NAME ERROR MESSAGE
    $nameSpan2.hide();
    //IF NAME VALUE DOES NOT MATCH NAME REGEX
    if (!$nameVal.match($nameRegex)) {
      //SHOW NAME ERROR
      $nameSpan.show();
    } else {
      //HIDE NAME ERROR
      $nameSpan.hide();
    }
    //IF NAME VALUE IS EMPTY
  } else {
    //HIDE NAME ERROR
    $nameSpan.hide();
    //SHOW BLANK NAME ERROR
    $nameSpan2.show();
  }
});

//*****MAIL INPUT VALIDATION

//FUNCTION FOR EMAIL INPUT VALIDATION UPON KEYUP
$mailInput.keyup( () => {
  //VARIABLE FOR EMAIL INPUT VALUE
  const $mailVal = $mailInput.val();
  //EMAIL INPUT REGULAR EXPRESSION
  const $mailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
  //CONDITIONAL STATEMENT IF EMAIL VALUE DOES NOT MATCH REGEX
  if (!$mailVal.match($mailRegex)) {
    //SHOW EMAIL ERROR
    $mailSpan.show();
  } else {
    //HIDE EMAIL ERROR
    $mailSpan.hide();
  }
});

//*****CHECKBOX VALIDATION
//VARIABLE FOR CHECKBOXES CLASS
const $checkBox = $('.activities');
//VARIABLE TO SET ERROR CHECKBOX CLASS
const $checkBoxSpan = $('<span class="checkBoxError">Please select at least one activity option.</span>');
//PLACE CHECKBOX ERROR AFTER CHECKBOXES
$checkBox.after($checkBoxSpan);

//FUNCTION FOR CHECKBOX VALIDATION UPON CHANGE
$checkBox.on('change', e => {
  //CONDITIONAL STATEMENT IF ANY CHECKBOXES ARE CHECKED
  if ($('input[type=checkbox]:checked').length) {
    //HIDE CHECKBOX ERROR
    $checkBoxSpan.hide();
  } else {
    //SHOW CHECKBOX ERROR
    $checkBoxSpan.show();
  }
});

//*****PAYMENT VALIDATION

//VARIABLE FOR EXPIRATION MONTH
const $expMonth = $('#exp-month');
//VARIABLE FOR PAYMENT SECTION
const $paymentMeth = $('#payment');
//VARIABLE FOR CREDIT CARD NUMBER
const $ccNum = $('#cc-num');
//VARIABLE TO SET BLANK INPUT ERROR FOR CREDIT CARD NUMBER
const $ccNumSpan = $('<span class="paymentError">Please enter a valid credit card number.</span>');
//VARIABLE TO SET REGEX ERROR FOR CREDIT CARD NUMBER
const $ccNumSpan2 = $('<span class="paymentError">Please enter a credit card number that is between 13 and 16 digits.</span>');
//PLACE BLANK CREDIT CARD ERROR BEFORE EXPIRATION MONTH
$expMonth.prev().before($ccNumSpan);
//PLACE CREDIT CARD REGEX ERROR BEFEORE EXPIRATION MONTH
$expMonth.prev().before($ccNumSpan2);
//HIDE CREDIT CARD REGEX ERROR
$ccNumSpan2.hide();

    //FUNCTION FOR CREDIT CARD NUMBER VALIDATION UPON KEYUP
    $ccNum.keyup( () => {
      //CONDITIONAL STATEMENT IF CREDIT CARD IS SELECTED AS PAYMENT METHOD VALUE
      if ($paymentMeth.val('credit card')) {
        //VARIABLE FOR CREDIT CARD NUMBER VALUE
        const $ccNumVal = $('#cc-num').val();
        //CREDIT CARD NUMBER INPUT REGULAR EXPRESSION
        const $ccNumRegex = /^\d{13,16}$/;
        //IF CREDIT CARD NUMBER VALUE FIELD IS NOT EMPTY
        if ($ccNumVal != "") {
          //HIDE BLANK INPUT CREDIT CARD NUMBER ERROR
          $ccNumSpan.hide();
          //IF CREDIT CARD NUMBER VALUE DOES NOT MATCH REGEX
          if (!$ccNumVal.match($ccNumRegex)) {
            //SHOW CREDIT CARD NUMBER REGEX ERROR
            $ccNumSpan2.show();
          } else {
            //HIDE CREDIT CARD NUMBER REGEX ERROR
            $ccNumSpan2.hide();
          }
          //IF CREDIT CARD NUMBER VALUE FIELD IS EMPTY
        } else {
          //HIDE CREDIT CARD NUMBER REGEX ERROR
          $ccNumSpan2.hide();
          //SHOW BLANK INPUT CREDIT CARD NUMBER ERROR
          $ccNumSpan.show();
        }
      }
    });

    //VARIABLE FOR ZIP CODE
    const $zip = $('#zip');
    //VARIABLE TO SET ERROR FOR ZIP CODE
    const $zipSpan = $('<span class="paymentError">Please enter a valid 5 digit zip code.</span>');
    //PLACE ZIP CODE ERROR BEFORE EXPIRATION MONTH
    $expMonth.prev().before($zipSpan);

        //FUNCTION FOR ZIP CODE VALIDATION UPON KEYUP
        $zip.keyup( () => {
          //CONDITIONAL STATEMENT IF CREDIT CARD IS SELECTED AS PAYMENT METHOD VALUE
          if ($paymentMeth.val('credit card')) {
            //VARIABLE FOR ZIP CODE VALUE
            const $zipVal = $('#zip').val();
            //ZIP CODE INPUT REGULAR EXPRESSION
            const $zipRegex = /^\d{5}$/;
            //CONDITIONAL STATEMENT IF ZIP CODE VALUE IS NOT EMPTY
            if ($zipVal != "") {
              //HIDE ZIP CODE ERROR MESSAGE
              $zipSpan.hide();
              //CONDITIONAL STATEMENT IF ZIP CODE VALUE DOES NOT MATCH REGEX
              if (!$zipVal.match($zipRegex)) {
                //SHOW ZIP CODE ERROR MESSAGE
                $zipSpan.show();
              } else {
                $zipSpan.hide();
              }
              //IF ZIP CODE VALUE IS EMPTY
            } else {
              //SHOW ZIP CODE ERROR
              $zipSpan.show();
            }
          }
        });

        //VARIABLE FOR CVV NUMBER
        const $cvv = $('#cvv');
        //VARIABLE TO SET ERROR FOR CVV NUMBER
        const $cvvSpan = $('<span class="paymentError">Please enter a valid 3 digit CVV number.</span>');
        //PLACE CVV NUMBER ERROR BEFORE EXPIRATION MONTH
        $expMonth.prev().before($cvvSpan);

            //FUNCTION FOR CVV NUMBER VALIDATION UPON KEYUP
            $cvv.keyup( () => {
              //CONDITIONAL STATEMENT IF CREDIT CARD IS SELECTED AS PAYMENT METHOD VALUE
              if ($paymentMeth.val('credit card')) {
                //VARIABLE FOR CVV NUMBER VALUE
                const $cvvVal = $('#cvv').val();
                //CVV NUMBER INPUT REGULAR EXPRESSION
                const $cvvRegex = /^\d{3}$/;
                //CONDITIONAL STATEMENT IF CVV NUMBER VALUE IS NOT EMPTY
                if ($cvvVal != "") {
                  //HIDE CVV NUMBER ERROR MESSAGE
                  $cvvSpan.hide();
                  //CONDITIONAL STATEMENT IF CVV NUMBER VALUE DOES NOT MATCH REGEX
                  if (!$cvvVal.match($cvvRegex)) {
                    //SHOW CVV NUMBER ERROR MESSAGE
                    $cvvSpan.show();
                  } else {
                    //HIDE CVV NUMBER ERROR MESSAGE
                    $cvvSpan.hide();
                  }
                  //IF CVV NUMBER VALUE IS EMPTY
                } else {
                  //SHOW CVV NUMBER ERROR
                  $cvvSpan.show();
                }
              }
            });


//*****BUTTON VALIDATION

//FUNCTION FOR SUBMIT BUTTON VALIDATION UPON CLICK
$submitButton.on('click', e => {
//VARIABLE FOR NAME INPUT VALUE
const $nameVal = $nameInput.val();
//VARIABLE FOR NAME INPUT REGUAR EXPRESSION
const $nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)?(\s)?$/i;
//VARIABLE FOR EMAIL INPUT VALUE
const $mailVal = $mailInput.val();
//VARIABLE FOR EMAIL INPUT REGULAR EXPRESSION
const $mailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
//VARIABLE FOR CREDIT CARD NUMBER VALUE
const $ccNumVal = $('#cc-num').val();
//VARIABLE FOR CREDIT CARD NUMBER REGULAR EXPRESSION
const $ccNumRegex = /^\d{13,16}$/;
//VARIABLE FOR ZIP CODE VALUE
const $zipVal = $('#zip').val();
//VARIABLE FOR ZIP CODE REGULAR EXPRESSION
const $zipRegex = /^\d{5}$/;
//VARIABLE FOR CVV NUMBER VALUE
const $cvvVal = $('#cvv').val();
//VARIABLE FOR CVV NUMBER REGULAR EXPRESSION
const $cvvRegex = /^\d{3}$/;

//CONDITIONAL STATEMENT IF NAME VALUE IS EMPTY OR DOES NOT MATCH REGEX
if ($nameVal == "" || !$nameVal.match($nameRegex)) {
  //PREVENT BUTTON DEFAULT ACTION
  e.preventDefault();
  //SHOW BUTTON ERROR
  $buttonErrorSpan.show();
} else {
  //HIDE BUTTON ERROR
  $buttonErrorSpan.hide();
}
//CONDITIONAL STATEMENT IF EMAIL VALUE DOES NOT MATCH REGEX
if (!$mailVal.match($mailRegex)) {
  //PREVENT BUTTON DEFAULT ACTION
  e.preventDefault();
  //SHOW BUTTON ERROR
  $buttonErrorSpan.show();
} else {
  //HIDE BUTTON ERROR
  $buttonErrorSpan.hide();
}
//CONDITIONAL STATEMENT IF THERE ARE NO CHECKBOXES CHECKED
if (!$('input[type=checkbox]:checked').length) {
  //PREVENT BUTTON DEFAULT ACTION
  e.preventDefault();
  //SHOW BUTTON ERROR
  $buttonErrorSpan.show();
} else {
  //HIDE BUTTON ERROR
  $buttonErrorSpan.hide();
}
//CONDITIONAL STATEMENT IF CREDIT CARD IS SELECTED AS PAYMENT METHOD VALUE
if ($paymentMeth.val() == 'credit card') {
  //VARIABLE FOR CREDIT CARD NUMBER VALUE
  const $ccNumVal = $('#cc-num').val();
  //VARIABLE FOR CREDIT CARD NUMBER REGULAR EXPRESSION
  const $ccNumRegex = /^\d{13,16}$/;
  //VARIABLE FOR ZIP CODE VALUE
  const $zipVal = $('#zip').val();
  //VARIABLE FOR ZIP CODE REGULAR EXPRESSION
  const $zipRegex = /^\d{5}$/;
  //VARIABLE FOR CVV NUMBER VALUE
  const $cvvVal = $('#cvv').val();
  //VARIABLE FOR CVV NUMBER REGULAR EXPRESSION
  const $cvvRegex = /^\d{3}$/;
  //CONDITIONAL STATEMENT IF CREDIT CARD NUMBER VALUE DOES NOT MATCH REGEX
  if (!$ccNumVal.match($ccNumRegex)) {
  //PREVENT BUTTON DEFAULT ACTION
  e.preventDefault();
  //SHOW BUTTON ERROR
  $buttonErrorSpan.show();
}
else {
  //HIDE BUTTON ERROR
  $buttonErrorSpan.hide();
}
//CONDITIONAL STATEMENT IF ZIP CODE VALUE DOES NOT MATCH REGEX
if (!$zipVal.match($zipRegex)) {
  //PREVENT BUTTON DEFAULT ACTION
  e.preventDefault();
  //SHOW BUTTON ERROR
  $buttonErrorSpan.show();
}
else {
  //HIDE BUTTON ERROR
  $buttonErrorSpan.hide();
}
//CONDITIONAL STATEMENT IF CVV NUMBER VALUE DOESN NOT MATCH REGEX
if (!$cvvVal.match($cvvRegex)) {
  //PREVENT BUTTON DEFAULT ACTION
  e.preventDefault();
  //SHOW BUTTON ERROR
  $buttonErrorSpan.show();
}
else {
  //HIDE BUTTON ERROR
  $buttonErrorSpan.hide();
}
}
});
