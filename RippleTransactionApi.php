<?php
/* this return payment from tag value $x */
function getpayment($x){
 $maps_url = 'https://data.ripple.com/v2/accounts/rfNXtF3zzc8fjJq8sBTAXQ9BbDiKTZVAJ4/payments?destination_tag='.$x;
 //'https://data.ripple.com/v2/accounts/rfNXtF3zzc8fjJq8sBTAXQ9BbDiKTZVAJ4/payments?destination_tag=12';
 $xrp_json = file_get_contents($maps_url);
 $xrp_array = json_decode($xrp_json);
 $paymnts = $xrp_array->payments;
 $actual_payments = $paymnts[0]->amount;

 if ($actual_payments == NULL){
   return(2);
 }else{
    return($actual_payments);
  }
}
//appel via ajax
if(isset($_POST['var1'])){
  $destination_tag = $_POST['var1'];
  $payment_val = getpayment($destination_tag);
  $response = array('result' => $payment_val);
            echo json_encode($response);
}

?>
