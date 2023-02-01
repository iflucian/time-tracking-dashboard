const urlAPI = "../data.json",
  dailyFrame = document.querySelector("#daily"),
  weeklyFrame = document.querySelector("#weekly"),
  monthlyFrame = document.querySelector("#monthly"),
  hours = document.querySelectorAll(".hours"),
  details = document.querySelectorAll(".details");

const getData = async () => {
  const response = await fetch(urlAPI);
  const data = await response.json();
  console.log(data);
  changeStats(data);
};

getData();

function changeStats(data) {
  for (let i = 0; i < hours.length; i++) {
    if (dailyFrame.classList.contains("active")) {
      hours[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
      details[
        i
      ].innerHTML = `Last Day - ${data[i].timeframes.daily.previous}hrs`;
    } else if (weeklyFrame.classList.contains("active")) {
      hours[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
      details[
        i
      ].innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
    } else {
      hours[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
      details[
        i
      ].innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
    }

    dailyFrame.addEventListener("click", () => {
      dailyFrame.classList.add("active");
      weeklyFrame.classList.remove("active");
      monthlyFrame.classList.remove("active");
      hours[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
      details[
        i
      ].innerHTML = `Last Day - ${data[i].timeframes.daily.previous}hrs`;
    });

    weeklyFrame.addEventListener("click", () => {
      dailyFrame.classList.remove("active");
      weeklyFrame.classList.add("active");
      monthlyFrame.classList.remove("active");
      hours[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
      details[
        i
      ].innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
    });

    monthlyFrame.addEventListener("click", () => {
      dailyFrame.classList.remove("active");
      weeklyFrame.classList.remove("active");
      monthlyFrame.classList.add("active");
      hours[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
      details[
        i
      ].innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
    });
  }
}
