let request = new XMLHttpRequest();
request.open('GET', 'https://randomuser.me/api/?results=20', true);
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(this.response);
        // console.log(data.results);
        let dataLength = data.results.length;
        for (let i = 0; i < dataLength; i++) {
            // create a new Card object
            let card = new Card(
                data.results[i].id.value,
                data.results[i].name.title,
                data.results[i].name.first,
                data.results[i].name.last,
                data.results[i].phone,
                data.results[i].email,
                data.results[i].picture
            );
            // display card
            card.createCard();
            // adjust image size
            card.adjustImgSize(card);
            // adjust picture according to screen size
            card.listenScreenSize(card);
        }
    } else {
        console.error('request error: ', request.status);
      }
}
request.send();