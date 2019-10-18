var realtime = new Ably.Realtime("n3GjUw.GjTlmg:UkQlZJWpzZbFYda6");
var sendChannel = realtime.channels.get("vote-channel");
var score;
function yesClicked(){
  vote(1);
}
function noClicked(){
  vote(-1);
}
function maybeClicked(){
  vote(0);
}
function forthClicked(){
  vote(-2);
}
function vote(score){
  sendChannel.publish("update", { "vote": score}, errCallback)
	document.getElementById('yesbtn').setAttribute("disabled", "true")
	document.getElementById('nobtn').setAttribute("disabled", "true")
	document.getElementById('maybebtn').setAttribute("disabled", "true")
  document.getElementById('forthbtn').setAttribute("disabled", "true")

  document.getElementById('yesbtn').style.cssText = 'background-color: grey;';
  document.getElementById('nobtn').style.cssText = 'background-color: grey;';
  document.getElementById('maybebtn').style.cssText = 'background-color: grey;';
  document.getElementById('forthbtn').style.cssText = 'background-color: grey;';
}

function errCallback(err){
  window.alert(err.message);
}
