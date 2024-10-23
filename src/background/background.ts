import { messageActions } from '../shared/types';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ test: 'test' });
});

chrome.runtime.onMessage.addListener(function (message) {
  switch (message.action) {
    case messageActions.OPEN_OPTIONS_PAGE:
      chrome.runtime.openOptionsPage();
      break;
    default:
      break;
  }
});
