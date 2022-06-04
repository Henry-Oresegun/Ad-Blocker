/*
 * adblock.js has  the capability to block ads
 * The way i figured that this would be possible was by 
 * blocking the requests from any ad domain during the onBeforeRequest phase
 * of the sites 
 * 
 */

var adblockEnabled = true
var blockedCount = 0

function blockAds(details) {
  console.log("adblockEnabled: " + adblockEnabled )
  if (!adblockEnabled)
    return
  //console.log("I am going to block:", details.url)
  blockedCount += 1
  return {cancel: true}
}

chrome.webRequest.onBeforeRequest.addListener(blockAds,
  {urls: adDomains},
  ["blocking"]
)


