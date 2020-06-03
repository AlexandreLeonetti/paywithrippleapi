<?php


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    include 'RippleTransactionApi.php';


    $random_id = random_bytes(20);
    $hextweet_key_id = bin2hex($random_id);

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>twit to db</title>
        <link rel="stylesheet" href="style.css">
<!--        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">-->
        <script src="./jquery-3.5.1.min.js"></script>

        <script>
            console.log("entered script function");
            var bool = 1;
        </script>
        <script src="cntd2.js"></script>
    </head>
    <style>    form  { text-align:center; } </style>
    <body>
        <div id="tweet_write_container">
            <?php
                $latest_payment_tag = 12; // TO BE  Changed by a GET ID query using the encrypted key.
                echo '
          <!--<div id="HatOfSmartphone" ></div>-->

                <div id="topsmartphonebar">
                          <div id="awaitingpayment"  style="float:left;">
                                  Awaiting payment ...
                          </div>
                          <div id="demo" style="float:right;">
                          </div>
                      </div>
                 <script>
                countdown('.$latest_payment_tag.');
                </script>
                  <div id="RippleSmartphone" >

                      <img id="SmallXrpLogo" src = "xrplogo2.png"/>
                        <span> Ripple </span>
                      </div>
                ';
                echo'<div id="middlesmartphone">

                <div style="float:left;">Payment amount :</div> <div style="float:right;">  0.95 XRP</div><br><br>

                <div style="float:left;">Network cost :</div>   <div style="float:right;"> 0.15 XRP</div><br><br>

                <div style="float:left;">  Total :</div> <div style="float:right;">1.05 XRP</div><br><br>

                <div style="float:left;">  Adress :</div> <div id="addr" style="float:right;">rfNXtF3zzc8fjJq8sBTAXQ9BbDiKTZVAJ4</div><br><br>

                <div style="float:left;">  Destination tag :</div> <div id="tagxrp"  style="float:right;">'.$latest_payment_tag.'</div>

                   </div>';
            ?>
            <br><img id="XrpQr" src = "xrp.png"/><br>

            <div id="finished"></div>

        <!--<button  href="fillurtweet.php" id="btnfinished" type="submit" value="Submit"  ></button>-->
    </div>
    </body>
</html>
