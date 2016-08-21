chrome.tabs.onCreated.addListener(function(newTab) {
  if (newTab.url.includes("adv.videomega.tv")) {
    chrome.tabs.remove(newTab.id);
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.includes("adv.videomega.tv")) {
    chrome.tabs.remove(tab.id);
  }
});