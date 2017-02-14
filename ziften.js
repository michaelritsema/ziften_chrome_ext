
// The onClicked callback function.
function onClickHandler(info, tab) {
  console.log(info);
  if (info.menuItemId == "IPAddress") {
    console.log("text selected:" + info.selectionText);
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://qa-50-cust1.cloud.ziften.com/external/api/actions/types?platform_id=2", false);
    xhr
    xhr.setRequestHeader("Authorization","Bearer 353f3b42047c4b4086a5a5f299cd156a");
    //xhr.setRequestHeader("Cookie",null); //remove
    xhr.send();
    var result = xhr.responseText;
    console.log(result);
  }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {

  var contexts = ["selection","link"];
  chrome.contextMenus.create({
    "title": "IP Address",
    "contexts": contexts,
    "id": "IPAddress"
  });

  

});
