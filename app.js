// declare a function where we can get the current time using
// the Date object. once we get the time, we store the hour,
// minutes, seconds, and milliseconds in variables. the h 
// variable must be divided 12 and take the remainder
// because the hour property from date gives us 1-24 hours 
//where as we only have 12 hours on a clock. for example, 
//1 % 12 =1 because 1 / 12 is 0 and the remainder is 1.	
var init= function() {
  let d= new Date();
  let h= d.getHours() % 12
  let m= d.getMinutes();
  let s= d.getSeconds();
  let milli= d.getMilliseconds();
// stores elements in variables
  let hourHand= document.querySelector('.hour-hand');
  let minHand= document.querySelector('.min-hand');
  let secHand= document.querySelector('.second-hand');
// rotation equations for each clock hand.
// the hourRotation variable takes the current hour and
// multiplies it by 30 because the distance between each
// numbered hour is 30 degrees. we add 0.5 degrees times the
// number of minutes so the hand will transition smoothly.
// for every 60 minutes, the hand will move 30 degrees.
// So we take 30/60 and we get .5
  const hourRotation= 30*h + .5 *m
// the minRotation var holds the equation for the minute hands
// rotation. 360/60 gives us 6, so that gives us 6 degrees per
// minute. for every second, the minute hand should move
// .1 degrees. 60s = 1min, and 5 mins is 30 degrees. so 1/5 of
// 30 is 6. and 6/60s = .1
  const minRotation= 6*m + 0.1*s
// secRotation var stores the second hand rotation equation
// 5 secs is 30 deg so 1 sec is 6 deg. 1000 millisec in 1 sec
// 6/1000 = .006
  const secRotation= 6*s + 0.006*milli

//set the rotation for each hand using the equations
  hourHand.style.transform= `rotate(${hourRotation}deg)`;
  minHand.style.transform=`rotate(${minRotation}deg)`;
  secHand.style.transform=`rotate(${secRotation}deg)`;
//requestAnimationFrame runs a function everytime 1 frame
// processes.
  requestAnimationFrame(init);
}
//runs init function on load
document.onload=init();