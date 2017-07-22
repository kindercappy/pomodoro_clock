$(document).ready(function(){
	let countS = parseInt($('.sessionTime').text());
	let countB = parseInt($('.breakTime').text());
	let stateSession = $('h2').text();
	console.log(stateSession);
	let count;
	var clock = $('.my-clock').FlipClock(0,{
		countdown:true,
		clockFace: 'MinuteCounter',
		autoStart:false,
		callbacks:{
			interval:function(){
				if(clock.getTime() == 0){
					if(stateSession == 'session'){	
						clock.setTime(countB);
						stateSession == 'break';
						console.log(stateSession);
						$('h2').text(stateSession);
					}else {
						clock.setTime(countS);
						stateSession = 'session';
						$('h2').text(stateSession);
					}
				}
			}
		}
	});
	$('.clock_start').on('click',function(){
			if (countS != 0 && this.stateSession !== 'session') {
				stateSession = 'session';
				// clock.setTime(countS);
				clock.start();
				$('h2').text(stateSession);
			}
	});
	$('.sessionInc').on('click',function(){
		countS += 1;
		$('.sessionTime').text(countS);
	});
	$('.sessionDec').on('click',function(){
		countS -= 1;
		$('.sessionTime').text(countS);
	});
	$('.breakInc').on('click',function(){
		countB += 1;
		$('.breakTime').text(countB);
	});
	$('.breakDec').on('click',function(){
		countB -= 1;
		$('.breakTime').text(countB);
	});
});