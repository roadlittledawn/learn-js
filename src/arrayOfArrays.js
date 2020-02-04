// A New Relic hiring exercise to weed out initial candidates

var activities = [
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Play Game', 2],
    ['Sleep', 7]
];

function convertArrToObject(arr) {
  var obj = {}
  arr.map((value) => { obj[value[0]] = value[1] })
  return obj
}

// console.log(convertArrToObject(activities))

var data = [
  [
    {
      "locale": "en-us",
      "ACL": {},
      "_in_progress": false,
      "_version": 2,
      "body": "<p>Before yophp-releent troubleshooting</a> (individual topics describing ...",
      "short_title": "Compatibility and requirements",
      "tags": [
        "php",
        "intro"
      ],
      "taxonomy_topics": [
        {
          "topic": [
            {
              "uid": "bltc8c0b8612c9bcf15",
              "_content_type_uid": "tax_term_topics"
            }
          ],
          "weight": 10
        }
      ],
      "title": "PHP agent compatibility and requirements",
      "uid": "blta36d9a774587d70c",
      "updated_at": "2020-01-23T20:55:01.428Z",
      "updated_by": "blt3456fd1346871fb0",
      "url": "/docs/standard_doc/agents/php-agent/getting-started/php-agent-compatibility-requirements",
      "publish_details": {
        "environment": "bltccb2bad190df9b4e",
        "locale": "en-us",
        "time": "2020-01-24T16:39:17.870Z",
        "user": "blt3456fd1346871fb0"
      }
    }
  ],
  {
    "created_at": "2020-01-15T20:00:49.861Z",
    "updated_at": "2020-01-24T21:50:59.676Z",
    "title": "Standard Doc",
    "uid": "standard_doc",
    "_version": 9,
    "inbuilt_class": false
  }
]
data[0] = data[0][0]
console.log((data))
