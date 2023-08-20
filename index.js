const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");


let fetchQuoteAPI = async() => {
    try{
        quoteEl.innerText = "Updating...";
        authorEl.style.display = "block";
        authorEl.innerText = "~ Updating...";
        btnEl.innerText = "LOADING...";
        btnEl.disabled = true;

        const result = await fetch("http://api.quotable.io/random").then((res)=>res.json());

        quoteEl.innerText = result.content;
        authorEl.innerText = `~ ${result.author}`;
        btnEl.innerText = "GET QUOTE";
        btnEl.disabled = false;
    }catch(error){
        authorEl.style.display = "none";
        btnEl.innerText = "GET QUOTE";
        btnEl.disabled = true;
        quoteEl.textContent = "Oops! An error has occured, please try again later...";
    }
}

fetchQuoteAPI();

btnEl.addEventListener("click", () => {
    fetchQuoteAPI();
})