function onSubmit() {
  var score = 0;
  var numOfQuestions = 5;
  var ansArr = ['a', 'd', 'b', 'c', 'a'];

  var q1 = document.forms['quiz']['q1'].value;
  var q2 = document.forms['quiz']['q2'].value;
  var q3 = document.forms['quiz']['q3'].value;
  var q4 = document.forms['quiz']['q4'].value;
  var q5 = document.forms['quiz']['q5'].value;

  for(var i = 1; i <= numOfQuestions; i++){
    if(eval('q' + i) == ''){
      alert("You missed question number " + i);
    }
  }

  for(var i = 1; i <= numOfQuestions; i++){
    if(eval('q' + i) == ansArr[i - 1]){
      score++;
    } 
  }

  
  var results = document.getElementById('results');
  results.innerHTML="<h2>You Scored " + score + " points out of " + numOfQuestions + "</h2>"
  alert('You scored ' + score + ' out of ' + numOfQuestions);
  return false;
  }
  //COUNTDOWN TIMER-------------------------
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);
