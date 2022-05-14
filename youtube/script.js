const menu = document.querySelector('#menu');
console.log(menu);
const sidebar = document.querySelector('.sidebar');
console.log(sidebar);

menu.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});
 
const getData=async()=>{
    try{
        const data = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=weekend&key=AIzaSyDVHJMK9nt5qUc_pPv-ZjKHjEYMq7smn1k');
const youtube = data.json();
console.log(youtube);
content.innerHTML ="";
youtube.forEach((youtubes)=>{
    display(youtubes);
})
    }
catch(e){

}
}
getData();