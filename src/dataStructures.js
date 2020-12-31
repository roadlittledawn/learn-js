const json = require("../data/docsRedirects.json");
const { log, dir } = console;

const orderByNode = (object) => {
  const { docs } = object;
  return docs.reduce((accum, curr) => {
    let { to, from } = curr.redirect;
    to = to.replace(/\//g, "");
    if (!accum[to]) {
      accum[to] = [];
    }
    accum[to].push(from);
    return accum;
  }, {});
};

dir(orderByNode(json), { depth: null });
