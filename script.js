//create loop for past, present and future time blocks
var currentDayDisplay = $('#currentDay');
var currentHour = moment().hour()
for (var i=9; i<=17; i++) {
    var textarea = $("#" + i)
    if (currentHour > i ) {
        textarea.addClass("past")
    }
    else if (currentHour < i) {
        textarea.addClass("future")
    }
    else if (currentHour === i) {
        textarea.addClass ("present")
    }
}
//click button for textbox and save btn for each timeblock
var btn = $(".btn")
btn.on("click", function(){
  var id = $(this).attr("data-id") 
  console.log(id) 
  var textArea = $("#" + id).val()
  console.log(textArea)
})
//Date and time with momentjs
setInterval(function() {
    var rightNow = moment().format('MMM DD. YYYY [at] hh:mm:ss a');
    currentDayDisplay.text(rightNow);
   

})