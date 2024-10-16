chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ test: 'test' });
});

(() => {
  console.log('Hi from background script!');
})();
