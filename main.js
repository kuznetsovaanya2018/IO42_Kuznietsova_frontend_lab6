const button = document.getElementById("download");
const cards = document.getElementById("cards");
const status = document.getElementById("status");

button.addEventListener("click", function () {
     fetch("https://randomuser.me/api?results=5")
        .then((response) => response.json())
        .then((data) => {
            status.textContent = "Success!";
            cards.innerHTML = "";                     // очистити старі картки
                
            data.results.forEach((user) => {
                cards.innerHTML += `
                    <div class="card">
                        <img src="${user.picture.large}" alt="фото">
                        <p>Name: ${user.name.first} ${user.name.last}</p>
                        <p>Cell: ${user.cell}</p>
                        <p>City: ${user.location.city}</p>
                        <p>Country: ${user.location.country}</p>
                    </div>
                `;
            });
        })
        .catch((error) => {
            console.log("помилка", error);
        });
});


