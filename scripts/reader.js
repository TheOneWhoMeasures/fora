import {reader} from "./selectors.js";

function addBody(content) {
  reader.innerHTML = "";
  const conElem = document.createElement("p");
  conElem.innerText = content;
  reader.appendChild(conElem);
}

export {addBody}