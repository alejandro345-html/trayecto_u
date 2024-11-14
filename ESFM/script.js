const cajasPrincipales = document.querySelectorAll('.card');
const cajasSecundarias = document.querySelectorAll('.subcard');


cajasSecundarias.forEach(cajaSecundaria => {
    cajaSecundaria.style.display = 'none';
});


cajasPrincipales.forEach((cajaPrincipal, index) => {
    cajaPrincipal.addEventListener('click', () => {
        const cajaSecundaria = cajasSecundarias[index]; 
        
        
        if (cajaSecundaria.style.display === 'none' || cajaSecundaria.style.display === '') {
            cajaSecundaria.style.display = 'flex';
        } else {
            cajaSecundaria.style.display = 'none';
        }

        
        if (cajaSecundaria.classList.contains('active')) {
            cajaSecundaria.classList.remove('active');
        } else {
            
            cajasSecundarias.forEach(subItem => {
                subItem.classList.remove('active');
            });
            
            cajaSecundaria.classList.add('active');
        }
    });
});

