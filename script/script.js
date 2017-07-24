$(document).ready(function(){
	let countS = 25;
	let countB = 5;
	$('.sessionTime').text(countS);
	$('.breakTime').text(countB);
	let stateSession = undefined;
	let sessionString = "Session Started";
	let breakString = "Break time";
	let paused = "Paused";
	let clear = 'Pomodoro Clock';
	var clock = $('.my-clock').FlipClock(0,{
		countdown:true,
		clockFace: 'MinuteCounter',
		autoStart:false,
		callbacks:{
			interval:function(){
				var time = clock.getTime().time;
            	if (time === 0) {
            		$('audio').trigger("play");
            	}
				if(clock.getTime().time == 0){
					if(stateSession){	
						clock.setTime(countB*60);
						clock.start();
						stateSession = false;
						$('h2').text(breakString);
					}else if(!stateSession){
						clock.setTime(countS*60);
						clock.start();
						stateSession = true;
						$('h2').text(sessionString);
					}
				}
			}
		}
	})
	$('.sessionInc').on('click',function(){
		if(countS > 0 ){
			countS += 1;
		}
		$('.sessionTime').text(countS);
	});
	$('.sessionDec').on('click',function(){
		if(countS > 1 ){
			countS -= 1;
		}
		$('.sessionTime').text(countS);
	});
	$('.breakInc').on('click',function(){
		if(countB > 0 ){
			countB += 1;
		}
		$('.breakTime').text(countB);
	});
	$('.breakDec').on('click',function(){
		if(countB > 1 ){
			countB -= 1;
		}
		$('.breakTime').text(countB);
	});
	$('.clock_start').on('click',function(){
			if (stateSession === undefined || clock.getTime() === 0) {
				clock.setTime(countS*60);
				stateSession = true;
			$('h2').text(sessionString);
			}else{
				if (stateSession) {
					$('h2').text(sessionString);
				}else if(!stateSession){
					$('h2').text(breakString);
				}
			}
			clock.start();
	});
	$('.clock_pause').on('click',function(){
		clock.stop();
		if(stateSession){
			$('h2').text("Session " + paused);
		}else if (stateSession === undefined){
			$('h2').text(clear);
		}else if(!stateSession){
			$('h2').text("Break " + paused);
		}
	});
	$('.clock_clear').on('click',function(){
		if(stateSession !== undefined){
			stateSession = undefined;
			clock.stop();
			clock.setTime(0);

			$('h2').text(clear);
		}
	});
});