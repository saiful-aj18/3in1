const display = document.getElementById("display");

function appendValue(value) { 
  display.value += value; 
}

function clearDisplay() { 
  display.value = ""; 
}

function calculate() {
  try { 
    display.value = eval(display.value); 
  }
  catch { 
    display.value = "Error"; 
  }
}

function updateClock() {
  let now = new Date();

  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  let day = now.toLocaleDateString('en-US', { weekday: 'long' });
  let date = now.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById("date").textContent = `${day}, ${date}`;
}

setInterval(updateClock, 1000);
updateClock();

function updateAnalogClock() {
  let now = new Date();

  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  let secDeg = ((seconds / 60) * 360) + 90;
  let minDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  let hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;


  document.getElementById("second").style.transform = `rotate(${secDeg}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minDeg}deg)`;
  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateAnalogClock, 1000);
updateAnalogClock();
