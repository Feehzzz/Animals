export default function fetchBitcoin(url, target) {
  fetch(url)
    .then(btc => btc.json())
    .then(bitcoin => {
      const btcpreco = document.querySelector(target);
      btcpreco.innerText = 'R$ ' + (bitcoin.BRL.buy).toFixed(0);
    }).catch(err => {
      console.log(err);
    })
}



