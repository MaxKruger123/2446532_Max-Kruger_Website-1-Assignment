function getQuote(){
    let newQuote = document.getElementById("quote");
    let quotes = [];
    quotes[0] = "\"There is a direct correlation between practice and result\"";    
    quotes[1] = "\"The best teacher in life is pain\"";    
    let i = Math.floor(Math.random() * quotes.length);    
    newQuote.innerHTML = quotes[i];    
}
    
