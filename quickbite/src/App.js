import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HomeComponent from './Components/HomeComponent/Main';
import OnlineOrder from './Components/OrderOnlineComponent/OrderOnline';
import PizzaCaveOrder from './Components/OrderOnlineComponent/PizzaCaveComponent/PizzaCave';
import PizzaCaveOrderConatiner from './Components/OrderOnlineComponent/PizzaCaveComponent/PizzaCave-Order';
import PizzaCaveOverviewContainer from './Components/OrderOnlineComponent/PizzaCaveComponent/PizzaCave-Order'
import Cart from './Components/CartComponent/Cart';
import { useContext} from 'react';
import { cartcontext } from './Context/CartContext.js';

function App() {

  const {ToastContainer} = useContext(cartcontext);

  return (
   <>
      <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/order-online" element={<OnlineOrder/>} />

        <Route path="/order-online/Pizza-Cave" element={<PizzaCaveOrder/>} >
           
           {/* Default */}
          <Route index element={<PizzaCaveOrderConatiner />} /> 
          
            {/* First Outlet */}
          <Route path="order" element={<PizzaCaveOrderConatiner/>} />

           {/* Second Outlet */}
          <Route path="overview" element={<PizzaCaveOverviewContainer/>} />    

        </Route>

        <Route path="/cart" element={<Cart/>} />

      </Routes>
        <ToastContainer
                                 position="top-right"
                                 autoClose={2000}
                                 hideProgressBar={false} 
                                 newestOnTop={true} 
                                />

    </BrowserRouter>
   </>
  );
}

export default App;
