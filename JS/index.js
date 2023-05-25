function getQuote(){
    let newQuote = document.getElementById("quote");

    let quotes = [];

    quotes[0] = "\"There is a direct correlation between practice and result\"";
    
    quotes[1] = "\"The best teacher in life is pain\"";
    

    //Randomly generate quote

    let i = Math.floor(Math.random() * quotes.length);

    //set quote
    newQuote.innerHTML = quotes[i];
    
}
    
