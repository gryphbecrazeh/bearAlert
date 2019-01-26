window.bears ={};
window.count=0;
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    window.bears[request.url] = request.count;
    // chrome.browserAction.setBadgeText({"text":`${count+=request.count}`});
    chrome.browserAction.setBadgeText({"text":`${(()=>{
        if(request.count<=9999){
            return count+=request.count;
        }
        else{
            return "grrr";
        }
    })()}`});

});
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url:'../html/popup.html'});
});
