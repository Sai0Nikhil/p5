// src/lib.js

// Build OpenWeatherMap URL for a city
export function APIURL(city) {
  return (
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=6ff5c38786a23c28d3e209d902eff09e&units=metric"
  );
}

export function callApi(reqMethod, url, data, responseHandler) {
  let options;
  if (reqMethod === "GET" || reqMethod === "DELETE") {
    options = { method: reqMethod };
  } else {
    options = {
      method: reqMethod,
      headers: { "Content-Type": "application/json" },
      body: data,
    };
  }

  fetch(url, options)
    .then((response) => {
      if (!response.ok)
        throw new Error(response.status + "-" + response.statusText);
      return response.json();
    })
    .then((res) => responseHandler(res))
    .catch((err) => alert(err));
}
