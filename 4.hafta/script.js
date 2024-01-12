var rastgele= document.getElementById("rastgele");



for ( let i = 0; i<9; i++) {

    rastgele.innerHTML += `<img src="https://source.unsplash.com/random/${i + 1}" class="shadow-lg rounded mx-3 my-3" width="350" height="300" alt="photo">`;

    }


var yenile= document.getElementById("yenile")

yenile.addEventListener("click", function() {
    location.reload();
})

