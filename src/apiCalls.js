const getUrls = () =>
  fetch("http://localhost:3001/api/v1/urls").then((response) => {
    if (response.ok) {
      console.log("res", response);
      return response.json();
    }
  });

const postUrl = (data) =>
  {console.log('apipost data', data);
  return fetch("http://localhost:3001/api/v1/urls", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });}

export { getUrls, postUrl };
