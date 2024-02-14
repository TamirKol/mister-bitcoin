import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate(){
    const res= await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    return res.data
}

async function getMarketPriceHistory(timespan,timeunit){
    const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${timespan}${timeunit}&format=json&cors=true`)
    return res.data.values
}
async function getAvgBlockSize(timespan,timeunit){
    const res = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=${timespan}${timeunit}&format=json&cors=true`)
    return res.data.values
}