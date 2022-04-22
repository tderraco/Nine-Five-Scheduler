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
var btn = $(".btn")
btn.on("click", function(){
  var id = $(this).attr("data-id") 
  console.log(id) 
  var textArea = $("#" + id).val()
  console.log(textArea)
})
setInterval(function() {
    var rightNow = moment().format('MMM DD. YYYY [at] hh:mm:ss a');
    currentDayDisplay.text(rightNow);
   

})