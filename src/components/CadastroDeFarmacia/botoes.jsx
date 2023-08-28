import React from 'react';
import { useHistory } from 'react-router-dom';

function BotoesCadastro() {
    const history = useHistory();

    const redirecionarMapa = () => {
        history.push('/map');
    };

    return (
        <div>
            <button onClick={redirecionarMapa}>
                Inserir Coordenadas Manualmente
            </button>
        </div>
    );
}


export function redirecionarMapa() {
    const history = useHistory();
    history.push('/map');
}
