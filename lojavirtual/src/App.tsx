// Functionals
import { useState } from 'react'
import { useQuery } from 'react-query'

//Drawers
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

//Styles
import {Wrapper} from './App.styles'

//Types
export type CartItem = {
  id: number;
  category: string;
  descrition: string;
  img: string;
  price: number;
  title: string;
  quantity: number;
}

const getProducts = async (): Promise<CartItem[]> =>
await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const {data, isLoading, error} = useQuery<CartItem[]>(
    'products',
    getProducts
  );

  console.log(data);

  const getTotalItems = () => null;
  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;

  if(isLoading) return <LinearProgress />
  if(error) return <div>something went wrong please try again later...</div>

  return (
    <div className="App">
      START
    </div>
  );
}

export default App;
