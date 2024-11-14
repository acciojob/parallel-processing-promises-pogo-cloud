//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function loadImage(url){
	return new Promise((resolve,reject)=>{
		let img=new Image();
		img.onload=()=>resolve(img);
		img.onerror=()=>reject(new Error(`Failed to load images's URL ${url}`));
		img.src=url;
	})
}
btn.addEventListener("click",()=>{
	let promises=images.map(image=>loadImage(image.url));
	Promise.all(promises)
	.then(imgs=>{
		imgs.forEach(img=>output.appendChild(img));
	})
	.catch(error=>console.log(error));
})
