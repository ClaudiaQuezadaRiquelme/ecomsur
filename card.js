class Card {
    constructor(
        id,
        title,
        firstname,
        lastname,
        phone,
        email,
        pictures
    ) {
        this.name = title + ' ' + firstname + ' ' + lastname;
        this.telephone = phone;
        this.mail = email;
        this.pictures = pictures; // it can be: .large, .medium, .thumbnail

        if (id === null) // some ids in api are null
            this.id = this.mail;
        else
            this.id = id;
        
        this.weNeedToAdjustWidth = true;
    }
    createCard () {
        const containerCards = document.getElementById('cards-container');
        let cardHTML = `
            <div class='card'>
                <img id='${this.id}' src='${this.pictures.large}' alt='${this.name}´s Avatar.'>
                <div class='info'>
                    <p>Nombre: ${this.name}</p>
                    <p>Teléfono: ${this.telephone}</p>
                    <p>Email: ${this.mail}</p>
                </div>
            </div>
        `;
        containerCards.innerHTML += cardHTML;
    }
    adjustImgSize (card) {
        const imgTagId = document.getElementById(card.id);
            if (screen.width < 550)
                imgTagId.src = card.pictures.medium; // Quise cambiar el ancho de pictures.medium porque la imagen tal como está se ve deformada, pero no pude cambiarlo sin afectar también al ancho de pictures.large
            else {
                imgTagId.src = card.pictures.large;
            }
    }
    listenScreenSize (card) {
        // originaly we asign pictures.large for default.
        // we change the picture according to screen size.
        window.addEventListener('resize', () => {
            const imgTagId = document.getElementById(card.id);
            if (screen.width < 550)
                imgTagId.src = card.pictures.medium;
            else 
                imgTagId.src = card.pictures.large;
        });
    }
}