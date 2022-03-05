import { BrowserRouter, Route,  Routes } from "react-router-dom"
import { Fragment } from "react"

import Header from './components/Header';
import SellersPage from './pages/SellersPage'
import SellerPage from './pages/SellerPage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CategoryPage from './pages/CategoryPage'
import CategoriesPage from './pages/CategoriesPage'
import HomePage from "./pages/HomePage"
const App = ()=> {
  return (
    <BrowserRouter>
    <Fragment>
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/sellers" element={<SellersPage/>}/>
        <Route path="/sellers/:id" element={<SellerPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<ProductPage/>}/>
        <Route path="/categories" element={<CategoriesPage/>}/>
        <Route path="/categories/:id" element={<CategoryPage/>}/>
      </Routes>
      </div>
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
