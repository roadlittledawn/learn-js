const fetch = require("node-fetch");

// Example POST method implementation:
async function getData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      api_key: "bltd44595d0824e8ffb",
      access_token: "cs6d460bafef2d1b0168e3c29e",
    },
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

// getData('https://cdn.contentstack.io/v3/content_types/?environment=prod&locale=en-us', {})
//   .then((data) => {
//     data.content_types.sort(function(a, b) {
//       var textA = a.title.toUpperCase();
//       var textB = b.title.toUpperCase();
//       return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
//   }).map(item => {
//       console.log(`${item.title} (${item.uid})`)
//     })
//   });
getData(
  "https://docs-dev.newrelic.com/api/migration/redirects?id=node%2F1516",
  {}
).then((data) => {
  console.log(data);
});
