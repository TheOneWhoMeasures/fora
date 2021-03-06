export {chapters};
import {sRec, nav} from "./selectors.js";
import * as Reader from "./reader.js";

function readChapter(nData) {
  fetch(nData.loc)
    .then(data => data.text())
    .then(text => Reader.addBody(text));
}

function addButton(tc, nData) {
  const button = document.createElement("button");
  button.addEventListener("click", () => {
    readChapter(nData);
  });
  button.textContent = tc;
  nav.appendChild(button);
}

function addChapters(nData){
  if(nData == undefined) return true;
  addButton(`Chapter ${nData.num} ♪ ${nData.date}`, nData);
}

function chapters(data) {
  sRec.innerText = data.most_rec;
  function recursion(curr=0, index=data.available.length, nData=null) {
    if(nData !== null) addChapters(nData);
    if(curr < index) recursion(curr+1, index, data.chapters[curr]);
  }
  recursion();
}

