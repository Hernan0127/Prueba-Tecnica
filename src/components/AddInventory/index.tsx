import React, { useState, useEffect } from 'react';

import AddInventoryUI from './AddInventory';
import { AddInventoryProps } from './interface';
import useStyles from './AddInventory.styles';
import ErrorMessage from '../ErrorMessage';

const AddInventory = ({
    onAddInventory,
}: AddInventoryProps) => {
    const classes = useStyles();
    const [liters, setLiters] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        setIsFormValid(liters !== '' && date !== '' && price !== '');
    }, [liters, date, price]);

    const handleSubmit = () => {
        const litersNumber = parseFloat(liters);
        const priceNumber = parseFloat(price);
        if (isNaN(litersNumber) || litersNumber <= 0 || isNaN(priceNumber) || priceNumber <= 0 || !date) {
            setErrorMessage('Por favor, ingrese detalles válidos');
            return;
        }

        setErrorMessage(null);
        onAddInventory({
            liters: litersNumber,
            date: new Date(date),
            pricePerLiter: priceNumber,
        });

        setLiters('');
        setDate('');
        setPrice('');
    };

    return (
        <>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <AddInventoryUI 
                classes={classes}
                liters={liters}
                setLiters={setLiters}
                date={date}
                setDate={setDate}
                price={price}
                setPrice={setPrice}
                handleSubmit={handleSubmit}
                isFormValid={isFormValid}
            />
        </>
    )
}

export default AddInventory;
