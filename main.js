import * as Sort from "./scripts/sorting.js"

const bMsg = document.querySelector("#msg");

function toMsg() {
  window.location.replace("routes/contact.html");
}

window.onLoad = fetch("chapters/metadata.json")
.then(rsp => rsp.json())
.then(data => Sort.chapters(data))

window.onLoad = bMsg.addEventListener("click", toMsg);