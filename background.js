chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { redirectUrl: details.url.replace("forcedownload=1", "forcedownload=0") };
  },
  {
    urls: ["https://moodle2.yrdsb.ca/*", "http://moodle2.yrdsb.ca/*"],
    types: ['main_frame']
  },
  ['blocking']);