import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/64279791?s=400&u=3a167007bb1a106a217ae68e31c0c63492f1ce14&v=4" alt="Luciano Pierdona" />
                <div>
                    <strong>Luciano Pierdona</strong>
                    <span>Geografia</span>
                </div>
            </header>
                <p>
                    Entusiasta das Bandeiras
                    <br /><br />
                    Desde o seu nascimento, é fascinado por bandeiras de diversos paises ao redor do mundo, decorando cada uma delas, com mais de 60000 alunos, ensinou geografia do melhor para todos!    
                </p>
            <footer>
                <p>
                    preço/hora
                    <strong>R$ 9,99</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;