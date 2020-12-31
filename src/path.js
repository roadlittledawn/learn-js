const path = require("path");

const domain = "https://docs.newrelic.com";

const domainTrailingSlash = "https://docs.newrelic.com/";

const slug = "/whats-new/2020/09/new-relic-one-has-dark-mode/";

// const slug = null;

// console.log([domain, slug].join("/"));

// console.log(URL(domain + slug).href);

const absPath =
  "/Users/clangosch/Sites/docs-website/src/content/whats-new/2020/12/alerts-applied-intelligence-new-landing-page.md";

makeRelPath = (str) => {
  return str.match(/\/src\/.*/g)[0];
};

console.log(makeRelPath(absPath));
