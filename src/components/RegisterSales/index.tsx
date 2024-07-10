import React, { useState, useEffect } from 'react';

import RegisterSalesUI from './RegisterSales';
import { RegisterSalesProps } from './interface';
import useStyles from './RegisterSales.styles';
import ErrorMessage from '../ErrorMessage';

const RegisterSales = ({
    onRegisterSale,
    availableLiters 
}: RegisterSalesProps) => {
    const classes = useStyles();
    const [litersSold, setLitersSold] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        setIsFormValid(litersSold !== '');
    }, [litersSold]);

    const handleSubmit = () => {
        const litersNumber = parseFloat(litersSold);
        if (isNaN(litersNumber) || litersNumber <= 0) {
            setErrorMessage('Por favor, ingrese una cantidad válida de litros.');
            return;
        }

        if (litersNumber > availableLiters) {
            setErrorMessage('La cantidad vendida excede la cantidad disponible en el inventario.');
            return;
        }

        setErrorMessage(null);
        try {
            onRegisterSale(litersNumber);
            setLitersSold('');
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    return (
        <>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <RegisterSalesUI 
                classes={classes}
                litersSold={litersSold}
                setLitersSold={setLitersSold}
                handleSubmit={handleSubmit}
                isFormValid={isFormValid}
            />
        </>
    )
}

export default RegisterSales;
