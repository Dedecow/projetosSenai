import React from 'react';
import { Box, Modal } from '@mui/material';
import './styled.css';
import { useState } from 'react';
import remedioimg from '../../assets/image/remedio.jpeg'

function Medicamentos() {
    const medicamLocalStorage = [
        { id: 0, laboratorio: 'aaaaa', dosagem: 'aaaaa', tipo: 'aaaaa', precoUnitario: 'aaaaa', nome: 'aaaaa', descricao: 'aaaaa' },
        { id: 1, laboratorio: 'bbbbb', dosagem: 'bbbbb', tipo: 'bbbbb', precoUnitario: 'bbbbb', nome: 'bbbbb', descricao: 'bbbbb' },
        { id: 2, laboratorio: 'ccccc', dosagem: 'ccccc', tipo: 'ccccc', precoUnitario: 'ccccc', nome: 'ccccc', descricao: 'ccccc' },
        { id: 3, laboratorio: 'ddddd', dosagem: 'ddddd', tipo: 'ddddd', precoUnitario: 'ddddd', nome: 'ddddd', descricao: 'ddddd' },
    ];
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color: '#000'
    };
    const [open, setOpen] = useState(false);
    const [detalhe, setDetalhe] = useState({});
    const handleClose = () => setOpen(false);
    const handleOpen = (id) => {
        medicamLocalStorage.forEach((medicamento) => {
            if (medicamento.id === id) {
                setDetalhe(medicamento);
            }
        });
        setOpen(true);
    };

    const Remedio = ({ id, nome, descricao }) => {
        return (
            <div className="card-padrao">
                <remedioimg alt="Remédio em caixa com título Devinhouse e a descrição seu uso pode provocar bem estar." className="card-img" />
                <div className="card-body">
                    <h5 className="card-title">{nome}</h5>
                    <p className="card-text">{descricao}</p>
                    <p className="heart-fav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </p>
                    <p onClick={() => handleOpen(id)}>Detalhes</p>
                    <a href="#" className="botao-padrao">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg> Adicionar
                    </a>
                </div>
            </div>
        );
    };

    const ModalDetalhes = ({ detalhe }) => {
        console.log(detalhe);
        return (
            <Box sx={style}>
                <h3>Detalhes do Medicamento</h3>
                <p>Nome: {detalhe.nome}</p>
                <p>Descrição: {detalhe.descricao}</p>
                <p>Laboratório: {detalhe.laboratorio}</p>
                <p>Dosagem: {detalhe.dosagem}</p>
                <p>Preço Unitário: {detalhe.precoUnitario}</p>
                <p>Tipo: {detalhe.tipo}</p>
            </Box>
        );
    };

    return (
        <>
            <Box>
                {medicamLocalStorage.map((medicamento) => {
                    return <Remedio key={medicamento.id} id={medicamento.id} nome={medicamento.nome} descricao={medicamento.descricao} />;
                })}
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <ModalDetalhes detalhe={detalhe} />
            </Modal>
        </>
    );
}

export { Medicamentos };
