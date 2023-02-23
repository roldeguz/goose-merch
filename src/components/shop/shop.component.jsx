import { Routes, Route } from "react-router-dom";

import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';
import Category from "../../routes/category/category.component";

import './shop.styles.scss';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<Category />}></Route>
        </Routes>
    )
}

export default Shop;