const data = {
  type: "jsx",
  value:
    '<p class="article-image">\n  <iframe allowfullscreen="true" ' +
    'allowtransparency="true" class="wistia_embed" frameborder="0" ' +
    'height="400" mozallowfullscreen="" msallowfullscreen="" ' +
    'name="wistia_embed" oallowfullscreen="" scrolling="no" ' +
    'src="https://fast.wistia.net/embed/iframe/kpriqz9wy7?videoFoam=true" ' +
    'title="Overview of the Cluster Explorer Video" ' +
    'webkitallowfullscreen="" width="780"></iframe>\n</p>',
  position: "",
};

const replaceHTMLstring = (dataString) => {
  const srcAttr = dataString.value
    .split(" ")
    .find((frag) => frag.includes("src="));
  const videoType = srcAttr.includes("fast.wistia.net") ? "wistia" : "youtube";
  const videoID = srcAttr.match(/[a-z0-9]{10}/g);
  console.log(`videoType: ${videoType}\n videoID: ${videoID[0]}`);
  // return `<Video id=${videoID[0]} type=${videoType} />`;
  return "Function ran";
};

// Match a version numbering scheme in a title

const title = "Browser agent v1234";

const match = title.match(/^(.*?)v?\d+(\.\d+){0,3}/);

// replaceHTMLstring(data);
console.log(match);
