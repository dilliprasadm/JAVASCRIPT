sayHello() // ReferenceError (if let/const is used)

var sayHello = () => {
  console.log('Hello!')
}

// Real World API Promise Example

const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m";

const fetchWhetherData = (city = "India") => {
  const data = new Promise((res, rej) => {
    res(fetch(URL));
  });
  return data;
};

fetchWhetherData()
  .then((res) => {
    res.json();
  })
  .then((data) => {
    console.log("weather data:", data);
  })
  .catch((err) => {
    console.log(err);
  });

// // Function to fetch weather data that returns a Promise
// const fetchWeatherData = () => {
//   return fetch(URL)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Extract temperature data from response
//       const temperatures = data.hourly.temperature_2m;
//       const times = data.hourly.time;

//       // Create formatted weather report
//       return times
//         .map((time, index) => ({
//           time: new Date(time).toLocaleTimeString(),
//           temperature: temperatures[index],
//         }))
//         .slice(0, 24); // Get next 24 hours
//     })
//     .catch((error) => {
//       console.error("Error fetching weather data:", error);
//       throw error;
//     });
// };

// // Usage example
// fetchWeatherData()
//   .then((weatherReport) => {
//     console.log("Weather forecast for next 24 hours:");
//     weatherReport.forEach((entry) => {
//       console.log(`Time: ${entry.time}, Temperature: ${entry.temperature}°C`);
//     });
//   })
//   .catch((error) => {
//     console.log("Failed to fetch weather data");
//   });
