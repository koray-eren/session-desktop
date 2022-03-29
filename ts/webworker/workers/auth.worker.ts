import * as lodash from 'lodash';
// import * as _ from 'lodash';

const sleep = async (time: any) => new Promise(r => setTimeout(r, time));

~(async function main() {
  while (true) {
    console.log('lodash map exists:', typeof lodash.map);
    await sleep(1000);
  }
})();

self.onmessage = ({ data: { question } }) => {
  self.postMessage({
    answer: `PLOP + ${question} + PLOP + 42`,
  });
};