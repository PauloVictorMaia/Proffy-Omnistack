import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function teacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/67983860?s=460&u=2e1356740a95b29a4550638dfb459557fea09ad1&v=4" alt="Paulo victor"/>

            <div>
                <strong>Paulo Victor</strong>
                <span>Física</span>
            </div>
        </header>

            <p>professor de física profissional ensinando as formulas físicar por meio do html</p>

            <footer>
                <p>Preço por hora<strong>R$200</strong></p>
                <button type='button'><img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
                </button>
            </footer>             
</article> 
    )
}

export default teacherItem