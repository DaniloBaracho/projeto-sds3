import React from 'react';
import logo from './logo.svg';
import ImgDsDark from 'assets/img/ds-dark.svg'

function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por <a href="linkedin.com/in/danilo-baracho-nunes-41aa9313b" target="_blank" rel="noreferrer">Danilo Baracho Nunes</a></p>
                <p className="text-light"><small><strong>Semana Spring React</strong><br />
                    Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
            </div>
        </footer> 
    );
}

export default Footer;