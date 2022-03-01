// Search Input and button...........

const mainPhone = document.getElementById('main');
const loadPhone = () => {

    const searchInput = document.getElementById('search-input');
    const errorMsg1 = document.getElementById('error-message');
    const inputValue = searchInput.value;

    if (inputValue == "") {
        errorMsg1.innerText = "please give a phone name";
        searchInput.value = '';
        main.innerHTML = '';
    }
    else {
        mainPhone.innerHTML = '';
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
            .then(res => res.json())
            .then(data => displayPhones(data.data));
        searchInput.value = '';
        errorMsg1.innerHTML = '';
    }
}


// Phone Results...........

const displayPhones = phones => {
    const errorMsg2 = document.getElementById('error-message');
    if (phones.length === 0) {
        errorMsg2.innerText = "Your Phone is not found";
    }

    const showPhoneList = phones.slice(0, 20)
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

// single phone details...........

const phoneDetails = (phone) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${phone}`)
        .then(res => res.json())
        .then(data => {
            const phoneFeature = data.data;
            const morePhoneDetails = document.getElementById('phone-details');
            morePhoneDetails.textContent = '';
            const div = document.createElement('div');
            div.classList.add('details-card');
            div.innerHTML = `
            <div class="card" style="width: 700px;">

              <div class="card-img">
              <img src="${phoneFeature.image}" class="card-img-top" alt="...">
              </div>

              <div class="card-body">
                <h5 class="card-title">Brand :</h5>
                <p class="card-text">${phoneFeature.brand}</p>
                <h5 class="card-title">Modal Name :</h5>
                <p class="card-text">${phoneFeature.name}</p><hr>
                <p class="card-text">${phoneFeature.releaseDate ? phoneFeature.releaseDate : "Release Date is not found "}</p>
                <h5 class="card-title"> Performance &  Storage :</h5>
                <p class="card-text">${phoneFeature.mainFeatures.storage}</p><hr>
                <p class="card-text">${phoneFeature.mainFeatures.memory}</p><hr>
                <p class="card-text">${phoneFeature.mainFeatures.chipSet}</p>
                <h5 class="card-title">Display :</h5>
                <p class="card-text">${phoneFeature.mainFeatures.displaySize}</p>
                <h5 class="card-title">Sensors :</h5>
                <p class="card-text text-wrap">${phoneFeature.mainFeatures.sensors}</p>
                <h5 class="card-title">Others :</h5>
                <p class="card-text">WLAN:${phoneFeature?.others?.WLAN ? phoneFeature.others.WLAN : " not found "}</p><hr>
                <p class="card-text">Bluetooth:${phoneFeature?.others?.Bluetooth ? phoneFeature.others.Bluetooth : " not found "}</p><hr>
                <p class="card-text">GPS:${phoneFeature?.others?.GPS ? phoneFeature.others.GPS : " not found "}</p><hr>
                <p class="card-text">NFC:${phoneFeature?.others?.NFC ? phoneFeature.others.NFC : " not found "}</p><hr>
                <p class="card-text">Radio:${phoneFeature?.others?.Radio ? phoneFeature.others.Radio : " not found "}</p><hr>
                <p class="card-text">USB:${phoneFeature?.others?.USB ? phoneFeature.others.USB : " not found "}</p>

               </div>
            </div>
            `;
            morePhoneDetails.appendChild(div)
        });
}

// if (phoneFeature.releaseDate.length === 0) {
//     // alert('phone not found')
//     errorMsg2.innerText = "phone not found";
// }