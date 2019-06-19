export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then(btc => btc.json())
    .then(bitcoin => {
      const btcpreco = document.querySelector('.btc-preco');
      btcpreco.innerText = 'R$ ' + (bitcoin.BRL.buy).toFixed(0);
    }).catch(err => {
      console.log(err);
    })
}



