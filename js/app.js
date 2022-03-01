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
    // else if (inputValue > 20) {
    //     error.innerText = 'Not enough phone remaining to serach ';
    //     searchInput.value = '';
    //     // main.innerHTML = '';
    // }
    // else if (inputValue.length == 0) {
    //     error.innerText = 'phone not found ';
    //     searchInput.value = '';
    //     main.innerHTML = '';
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
    if (phones.length === 0) {
        alert('phone not found')
    }

    const showPhoneList = phones.slice(0, 20)
    // phones.forEach(phone => {
    // });
    for (const phone of showPhoneList) {
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
                       <button onclick="phoneDetails('${phone.slug}')" class="btn btn-dark">See More Details</button>
                    </div>
                </div>
                `;
        mainPhone.appendChild(newDiv);
    }
}

const phoneDetails = (phone) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${phone}`)
        .then(res => res.json())
        .then(data => {
            const allphones = data.data;
            const singlePhone = allphones.find(phone => phone.slug === code)

            const div = document.createElement('div');
            main.innerHTML = '';
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
              <img src="${singlePhone.image}" class="card-img-top" alt="...">
              <div class="card-body">
                 <h5 class="card-title">${singlePhone.suit}</h5>
                 <p class="card-text">${singlePhone.code}</p>
                 <p class="card-text">${singlePhone.value}</p>
               </div>
            </div>
            `;
            main.appendChild(div)
        });

}