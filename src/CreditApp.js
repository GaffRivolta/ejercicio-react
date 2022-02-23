import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './CreditApp.css';

const CreditApp = () => {

    const [ammount, setAmmount] = useState(5000);
    const [term, setTerm] = useState(3);

    const handleAmmountChange = (e) => {
        setAmmount(e.target.value);
    };

    // const handleAmmountChangeInSlider = (value) => {
    //     setAmmount(value);
    // };

    const handleTermChange = (e) => {
        setTerm(e.target.value);
    };

    return (
        <>
            <div className='app__container'>
                <div className='app__simulate-container'>
                    <h1>Simulá tu crédito</h1>
                    <div className='app__calculator-container'>
                        <div className='app__ammount-container'>
                            <div className='app__ammount-row'>
                                <span className='app__ammount-text'>MONTO TOTAL</span>
                                <input
                                    className='app__ammount'
                                    type='number'
                                    value={ammount}
                                    onChange={handleAmmountChange}
                                />
                            </div>
                            <div className='app__ammount-slider-container'>
                                <Slider
                                    min={5000}
                                    max={50000}
                                    value={ammount}
                                    //defaultValue={ammount}
                                    //onAfterChange={(e) => handleAmmountChangeInSlider(e.target.value)}
                                    onChange={handleAmmountChange}
                                />
                                <div className='app__ammount-slider-min-and-max'>
                                    <span>$ 5.000</span>
                                    <span>$ 50.000</span>
                                </div>
                            </div>
                        </div>
                        <div className='app__term-container'>
                            <div className='app__term-row'>
                                <span className='app__term-text'>PLAZO</span>
                                <input
                                    className='app_term'
                                    type='number'
                                    value={term}
                                    onChange={handleTermChange}
                                />
                            </div>
                            <div className='app__term-slider-container'>
                                <Slider
                                    min={3}
                                    max={24}
                                    value={term}
                                    onChange={handleTermChange}
                                />
                                <div className='app__term-slider-min-and-max'>
                                    <span>3</span>
                                    <span>24</span>
                                </div>
                            </div>
                        </div>
                        <div className='app__result-container'>
                            <div className='app__result-row'>
                                <span className='app__fixed-fee-text'>CUOTA FIJA POR MES</span>
                                <span className='app__result-text'>$</span>
                            </div>
                            <div className='app__actions-row'>
                                <div className='app__get-credit'>OBTENÉ CRÉDITO</div>
                                <div className='app__view-detail'>VER DETALLE DE CUOTAS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CreditApp