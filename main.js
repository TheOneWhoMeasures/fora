import * as Sort from "./scripts/sorting.js"


window.onLoad = fetch("chapters/metadata.json")
.then(rsp => rsp.json())
.then(data => Sort.chapters(data))