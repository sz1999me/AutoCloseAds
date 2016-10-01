var adsites = ["adv.videomega.tv"];

chrome.tabs.onCreated.addListener(function(newTab) {
  for (int i=0; i<adsites.length;i++){
    if (newTab.url.includes(adsites[i])) {
      chrome.tabs.remove(newTab.id);
    }
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  for (int i=0; i<adsites.length;i++){
    if (tab.url.includes(adsites[i])) {
      chrome.tabs.remove(tab.id);
    }
  }
});