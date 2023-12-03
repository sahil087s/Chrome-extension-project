console.log("cute kittens of the world..!!");


let filenames = [
  "freddie-marriage-40645.jpg",
  "koen-eijkelenboom-353684.jpg",
  "mikhail-vasilyev-130018.jpg",
  "mikhail-vasilyev-253977.jpg",
  "roxanne-desgagnes-277568.jpg"
];

let imgs = document.getElementsByTagName("img");

for (imgElt of imgs){
    let r = Math.floor(Math.random() * filenames.length);
    let file = "img/" + filenames[r];
    let url = chrome.runtime.getURL(file); 
    imgElt.src = url;
    console.log(url);
}