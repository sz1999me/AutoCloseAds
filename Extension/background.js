chrome.tabs.onCreated.addListener(function(newTab) {
  if (newTab.url.includes("adv.videomega.tv")) {
    chrome.tabs.remove(newTab.id);
  }
}