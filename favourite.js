
console.log("hello");
favlist
let favouritebarList = document.getElementById("favlist");
let list = [];
//console.log(list.length);
list = JSON.parse(localStorage.getItem("favlistarr"));


// to fetch the  updated list 
function fetching(list) {

    for (var i = 0; i < list.length; i++) {
        loadhero(list[i]);
    }
}


// loading data of  hero function
async function loadhero(heroid) {

    const URL = "https://www.superheroapi.com/api.php/727054372039115/" + heroid.trim();
    console.log(URL);
    const res = await fetch(`${URL}`);
    const data = await res.json();
    console.log(data);
    if (data){
        herolistdis(data);
    } 
}
// to display the data of the movie
function herolistdis(hero) {

    let herolistitem = document.createElement('div');
    herolistitem.innerHTML = "";
    herolistitem.innerHTML = `
        <div id="list-fav">
            <ul id="favlist">
                <div class= "list-data">
                <img src = "${hero.image.url}" >
                 
                <H5>${hero.name}</H5>
                <button class="button-75" id="remove" type="submit" onclick="remove(this.value)" value=${hero.id}>Remove</button>
                </div>
            </ul>
        </div>
       
        `;
    favouritebarList.appendChild(herolistitem);
}

// to remove the item from the list
function remove(value) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            list.splice(i, 1);
        }
    }
   // console.log("remove running ")
    localStorage.setItem('favlistarr', JSON.stringify(list));
    favouritebarList.innerHTML = "";
    fetching(list);
}


fetching(list);