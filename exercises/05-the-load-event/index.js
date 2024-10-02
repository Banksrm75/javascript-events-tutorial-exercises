// Your function goes here

let finishedPage = document.getElementsByTagName("body");

function loadListener() {
    alert("Loading finished...");
};

finishedPage.addEventListener("load", loadListener);
