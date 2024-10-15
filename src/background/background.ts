import { SharedFunction } from '../shared/utils';

(() => {
  console.log('Hi from background script!');
  SharedFunction();
})();
