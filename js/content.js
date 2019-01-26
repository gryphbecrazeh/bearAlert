const re = new RegExp('bear','gi');
const matches = document.documentElement.innerHTML.match(re);
chrome.runtime.sendMessage((()=>{
    if(matches){
        alert("Grrr");
        return {
            url:window.location.href,
            count:matches.length,
            match:matches
            };        
    }
})());