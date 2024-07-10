import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import {
  AddInventory,
  RegisterSales,
  InventoryList,
  SalesSummary,
} from './components';
import useInventory from './hooks/useInventory';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const { inventory, salesSummary, addInventory, registerSale } = useInventory();

  const getTotalInventory = () => {
    return inventory.reduce((total, item) => total + item.liters, 0);
  };

  const availableLiters = inventory.reduce((acc, item) => acc + item.liters, 0);

  return (
    <Container className={classes.root}>
      <Box textAlign="center" my={4}>
        <Typography variant="h4" gutterBottom>
          Sistema de Gestión de Inventario de Hidrocarburos
        </Typography>
      </Box>
      <Box textAlign="center" my={2}>
        <Paper className={classes.inventoryPaper}>
          <Typography variant="h6">
            Inventario Total Restante: {getTotalInventory()} Litros
          </Typography>
        </Paper>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <AddInventory onAddInventory={addInventory} />
            <div className={classes.scrollContainer}>
              <InventoryList inventory={inventory} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <RegisterSales onRegisterSale={registerSale} availableLiters={availableLiters} />
            <div className={classes.scrollContainer}>
              <SalesSummary salesSummary={salesSummary} />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App;