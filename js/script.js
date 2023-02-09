const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.minute-hand');
const secsHand = document.querySelector('.second-hand');

const updateTime = function(){
    const now = new Date();
    
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    //console.log(hour);
    console.log(minute);
    //console.log(second);
    const hourDegree = ((hour/12)*360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`
    const minuteDegree = ((minute/60)*360) + 90;
    minsHand.style.transform = `rotate(${minuteDegree}deg)`
    const secondDegree = ((second/60)*360) + 90;
    secsHand.style.transform = `rotate(${secondDegree}deg)`

};
setInterval(updateTime,1000);