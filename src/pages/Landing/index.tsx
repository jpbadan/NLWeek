import React from 'react';
import './style.css';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function  Landing(){ 
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logo image"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>  

                <img src={landingImg} alt="hero image" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas"/>
                        Dar Aulas
                    </a>
                </div>

                <span className="total-conections">
                    Mais de 200 conexões já realizadas <img src={purpleHeartIcon} alt=""/>
                </span>
            </div>
        </div> 
    )
}
export default Landing;