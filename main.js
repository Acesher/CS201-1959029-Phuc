document.addEventListener("DOMContentLoaded", () => {
    // on page load get first item
    console.log("loaded");
    itemRequest();
    let location = document.querySelector(".p-showcase");

    function itemRequest() {
        let url = "https://fakestoreapi.com/products";
        let xhr = new XMLHttpRequest();
        xhr.open(
            "GET",
            url,
            true
        );
        xhr.onload = function() {
            if (this.status == 200) {
                let res = JSON.parse(this.responseText);
                console.log(res);
                generateOutput(res);
            }
        }
        xhr.send();
    }

    // Function to process JS => HTML
    function generateOutput(obj) {
        console.log(obj);
        let output = "";
        for (var i = 0; i < 4; i++) {
            output += `
                <div class="col-md-3">
                    <div class="card mini-golden">
                        <img src="${obj[i].image}">
                        <div class="card-body">
                            <h3 class=" card-title my-3" style="margin-bottom: 40px !important; font-size: 1.75rem;">${obj[i].title}</h3>
                            <h5 class="card-text" style="margin-bottom: 20px !important; font-size: 1rem;">${obj[i].description}</h5>
                            <h3 class="font-weight-light"><em>${obj[i].price}</em></h3>
                        </div>
                    </div>
                </div>`;
            console.log(output);
        }

        console.log(output);
        outputHTML(output);
    }

    // Function to output HTML to DOM
    function outputHTML(html) {
        location.innerHTML = html;
    }
})