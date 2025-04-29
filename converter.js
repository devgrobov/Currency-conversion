const RATES = {
    usd: 0.024,
    eur: 0.021,
    funt: 0.018,
    tenge:12.31,
};

function convert(groves,currency){
    if (!RATES[currency]){
        return null;
    }
    return groves* RATES[currency];
}