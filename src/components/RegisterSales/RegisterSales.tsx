import React from 'react';
import { 
    Button, 
    TextField, 
    Grid, 
    Paper, 
    Typography 
} from '@mui/material';
import SellIcon from '@mui/icons-material/Sell';
import { RegisterSalesUIProps } from './interface';

const RegisterSales = ({
    classes,
    litersSold,
    setLitersSold,
    handleSubmit,
    isFormValid,
}: RegisterSalesUIProps) => {
    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
                Registrar Venta
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Litros Vendidos"
                        value={litersSold}
                        onChange={(e) => setLitersSold(e.target.value)}
                        className={classes.input}
                        InputProps={{ endAdornment: <span>Litros</span> }}
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
                        startIcon={<SellIcon />}
                        style={!isFormValid ? {} : { color: '#FFF' }}
                    >
                        Registrar Venta
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default RegisterSales;