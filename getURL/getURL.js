function run() {
  chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
    document.querySelector("#numOfTabs").innerHTML = tabs.length;
    let txt = "";
    tabs.forEach((tab) => {
      txt += `[${tab.title}] (${tab.url})\n\n`;
    });
    document.querySelector("#txt").value = txt;
  });
}

function copy() {
  const txtarea = document.querySelector("#txt");
  txtarea.select();
  document.execCommand("copy");
}

window.addEventListener("load",()=>{
  run();
  document.querySelector("#copy").addEventListener("click", copy());
})

