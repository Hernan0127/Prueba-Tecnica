import React from 'react';
import { 
    Button, 
    TextField, 
    Grid, 
    Paper, 
    Typography 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AddInventoryUIProps } from './interface';

const AddInventory = ({
    classes,
    liters,
    setLiters,
    date,
    setDate,
    price,
    setPrice,
    handleSubmit,
    isFormValid,
}: AddInventoryUIProps) => {
    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
                Agregar Inventario
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Litros"
                        value={liters}
                        onChange={(e) => setLiters(e.target.value)}
                        className={classes.input}
                        InputProps={{ endAdornment: <span>Litros</span> }}
                        type="number"
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Fecha de Entrada"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={classes.input}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Precio por Litro"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className={classes.input}
                        InputProps={{ startAdornment: <span>$</span> }}
                        type="number"
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        disabled={!isFormValid}
                        fullWidth
                        startIcon={<AddIcon />}
                        style={!isFormValid ? {} : { color: '#FFF' }}
                    >
                        Agregar Inventario
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default AddInventory;