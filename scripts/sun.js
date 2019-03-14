var mainHeading = document.getElementById('mainHeading');

var tl1 = new TimelineMax({repeat:-1});
tl1.to(mainHeading, 0.8, {top: 25, ease: Sine.easeInOut})
   .to(mainHeading, 0.8, {left: 25, ease: Sine.easeInOut}, '-=0.25')
   .to(mainHeading, 0.8, {top: 8, ease: Sine.easeInOut}, '-=0.25')
   .to(mainHeading, 0.8, {left: 8, ease: Sine.easeInOut}, '-=0.25');

