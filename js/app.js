// alert('you are in');
const loadPhone = () => {
    // console.log("btn click");

    const input = document.getElementById('search-input');
    // console.log("input click");
    const error = document.getElementById('error-message');
    // console.log("error click");
    const inputValue = input.value;
    // console.log(inputValue);isNaN(inputValue) ||

    if (inputValue == "") {
        // alert("please enter a number");
        error.innerText = "please give a phone name";
        input.value = '';
        // main.innerHTML = '';
    }
}
// fetch('https://openapi.programming-hero.com/api/phones?search')