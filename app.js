const format_24 = document.querySelectorAll(".format-24");
const format_12 = document.querySelectorAll(".format-12");

// Clock div's
const clock = document.querySelector(".Ind");
const Lonclock = document.querySelector(".Lon");
// selecting display para element
const indianTime = function () {
  const time = new Date();
  let hr = time.getHours();
  const min = String(time.getMinutes()).padStart(2, 0);
  const sec = String(time.getSeconds()).padStart(2, 0);
  // console.log(typeof sec);
  let formatHr = hr;

  if (format_12[0].classList.contains("active")) {
    formatHr = String(hr - 12).padStart(2, 0);
  }
  if (format_24[0].classList.contains("active"))
    formatHr = String(time.getHours()).padStart(2, 0);

  clock.textContent = `${formatHr}:${min}:${sec}  ${hr > 12 ? "PM" : "AM"}`;
};

// TODO: calculate London Time

const londonTime = function () {
  const Lontime = new Date().toLocaleTimeString("en-Us", {
    timeZone: "Asia/Dubai",
    timeStyle: "medium",
    hour12: false,
  });
  console.log(Lontime);
  let [LonHours, LonMinutes, Lonseconds, LonZone] = Lontime.replace(
    " ",
    ":"
  ).split(":");
  console.log(LonHours + " " + LonMinutes + " " + Lonseconds + " " + LonZone);
  //   console.log(Lontime);
  //   ? Lonclock.textContent = Lontime;
  let formatHr = LonHours;
  LonZone = LonHours > 12 ? "PM" : "AM";
  if (format_12[1].classList.contains("active")) {
    formatHr = String(LonHours - 12).padStart(2, 0);
  }
  if (format_24[1].classList.contains("active"))
    formatHr = String(LonHours).padStart(2, 0);

  Lonclock.textContent = `${formatHr}:${LonMinutes}:${Lonseconds} ${LonZone}`;
};

// * calling setIntervals  //
setInterval(indianTime, 0);
// londonTime();
setInterval(londonTime, 0);

format_24[0].addEventListener("click", function () {
  // console.log("24 is clicked");
  // To make the buttons visible
  format_24[0].classList.toggle("active");
  format_12[0].classList.remove("active");
});
format_12[0].addEventListener("click", function () {
  format_12[0].classList.toggle("active");
  format_24[0].classList.remove("active");
});

//  checking for London Buttons
format_24[1].addEventListener("click", function () {
  // console.log("24 is clicked");
  // To make the buttons visible
  format_24[1].classList.toggle("active");
  format_12[1].classList.remove("active");
});
format_12[1].addEventListener("click", function () {
  format_12[1].classList.toggle("active");
  format_24[1].classList.remove("active");
});
