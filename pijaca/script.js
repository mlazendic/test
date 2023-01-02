let ukupno=0;

function addToCart(dugme){
    let mainEl = dugme.closest('.single-item');
    let kolicina = mainEl.querySelector('input').value;
    let naziv = mainEl.querySelector('h3').innerText;    
    let cijena = mainEl.querySelector('.price').innerText;
    let cartItems=document.querySelector('.cart-items');   

    kolicina=parseInt(kolicina);
    cijena=cijena.substring(1);
    cijena=parseInt(cijena);

    if(kolicina>0){

        let suma =cijena*kolicina;
        ukupno+=suma;

        cartItems.innerHTML += `<div class='cart-single-item'>
                                <h3>${naziv}</h3>
                                <p>$${cijena} x ${kolicina} = $<span>${suma}</span></p>
                                <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                                </div>`;

        document.querySelector('.total').innerText=`Total: $${ukupno}`;
        dugme.innerText="Dodato";
        dugme.setAttribute('disabled','true');
    } else {
        alert('kolicina je manja od nule');
    }


}

function removeFromCart(ukloni){

    let mainEl=ukloni.closest('.cart-single-item');
    let suma = mainEl.querySelector('p span').innerText;
    let naziv=mainEl.querySelector('h3').innerText;
    let povrce=document.querySelectorAll('.single-item');
    
    suma=parseInt(suma);
    ukupno-=suma;
    document.querySelector('.total').innerText=`Total: $${ukupno}`;
    mainEl.remove();

    povrce.forEach(function(pov){
        let item=pov.querySelector('.si-content h3').innerText;

        if (item===naziv){
            console.log(item);
            pov.querySelector('.actions input').value=0;            
            pov.querySelector('.actions button').removeAttribute('disabled');
            pov.querySelector('.actions button').innerText='Dodaj';
        }
    })
}