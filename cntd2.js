
function countdown(tweetID, destination_tag){

    console.log("entered count down from cntd js");
// Set the date we're counting down to
// Var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
var countDownDate = 1200000 + new Date().getTime();
var inc = 0 ;
var transaction = 0;
// Update the count down every 1 second
var x = setInterval(function(){
  inc++;
console.log(inc);
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =  minutes + "m " + seconds + "s ";

//payment window vs ripple
destination_tag = 0;

if (inc == 200 || inc == 1800 || inc == 2700  ) { // 3 mins || 6mins || 9 mins || 12 mins

      $.ajax({ type:"POST", url: "RippleTransactionApi.php",
        data: {"var1": destination_tag  },
        success: function(response){
        var jsresponse = JSON.parse(response);
        transaction = jsresponse["result"];
        console.log(transaction);
          if (transaction>0.5){
            clearInterval(x);
            document.getElementById("demo").innerHTML = "PAYMENT ACCEPTED";
		console.log("payment accepted");
	  }else{
            console.log("still waiting for payment");
          }
      }});
}
  if(distance < 0){
    clearInterval(x);
        document.getElementById("awaitingpayment").innerHTML = "Status : ";
        document.getElementById("demo").innerHTML = "TICKET EXPIRED";
        document.getElementById("finished").innerHTML = "<div onclick=\"location.href='http://www.socialcryptoservice.com'\"; class=\"comebacktomainpage\">Go back to main page.</div>";
        document.getElementById("XrpQr").style.display = "none";

        $.ajax({ type:"POST", url: "RippleTransactionApi.php",
        data: {"var1": destination_tag },
        success: function(response){
        var jsresponse = JSON.parse(response);

        console.log(jsresponse["result"]);
        console.log(jsresponse["result"]);
          if (transaction>0.5){
            clearInterval(x);
            document.getElementById("awaitingpayment").innerHTML = "Status : ";
            document.getElementById("demo").innerHTML = "PAYMENT ACCEPTED" ;// add go to index button
            document.getElementById("finished").innerHTML = "<div onclick=\"location.href='http://www.socialcryptoservice.com'\"; class=\"comebacktomainpage\">Go back to main page.</div>";
            document.getElementById("XrpQr").style.display = "none";
            $.ajax({ type:"POST", url: "TweetModule.php", data: {"var1": tweetID }, success: function(response) {alert (tweetID);}});
          }else{
            document.getElementById("awaitingpayment").innerHTML = "Status : ";
            document.getElementById("demo").innerHTML = "TICKET EXPIRED" ;
            document.getElementById("finished").innerHTML = "<div onclick=\"location.href='http://www.socialcryptoservice.com'\"; class=\"comebacktomainpage\">Go back to main page.</div>";
            document.getElementById("XrpQr").style.display = "none";
          }
        }});
  }
}, 200);
}
