// alert('you are in');
const mainPhone = document.getElementById('main');
const loadPhone = () => {
    // console.log("btn click");

    const searchInput = document.getElementById('search-input');
    // console.log("input click");
    const error = document.getElementById('error-message');
    // console.log("error click");
    const inputValue = searchInput.value;
    // console.log(inputValue);isNaN(inputValue) ||

    if (inputValue == "") {
        // alert("please enter a number");
        error.innerText = "please give a phone name";
        searchInput.value = '';
        main.innerHTML = '';
    }
    else if (inputValue > 20) {
        error.innerText = 'Not enough phone remaining to serach ';
        searchInput.value = '';
        // main.innerHTML = '';
    }
    // else if (inputValue !== 20) {
    //     error.innerText = 'Not enough phone remaining to serach ';
    //     searchInput.value = '';
    //     // main.innerHTML = '';
    // }
    else {
        mainPhone.innerHTML = '';

        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
            .then(res => res.json())
            .then(data => displayPhones(data.data));

        searchInput.value = '';
        error.innerHTML = '';
    }
}

const displayPhones = phones => {
    // console.log(phones);
    phones.forEach(phone => {
        const mainPhone = document.getElementById('main');
        const newDiv = document.createElement('div');
        newDiv.classList.add("col-lg-4")
        newDiv.classList.add("mb-5")
        newDiv.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h5 class="card-title">${phone.brand}</h5>
                       <p class="card-text">${phone.phone_name}</p>
                       <button onclick="phoneDetails()" class="btn btn-dark">See More Details</button>
                    </div>
                </div>
                `;
        mainPhone.appendChild(newDiv);
    });
    // for (const phone of phones) {
    //     console.log(card.suit);  
    //     }
}
