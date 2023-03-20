import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

import { setCategories } from "../../store/category/category.action";

import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';
import Category from "../../routes/category/category.component";

import './shop.styles.scss';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategroriesMap = async () => {
            const categoryArray = await getCollectionAndDocuments();
            
            dispatch(setCategories(categoryArray));
        }
        
        getCategroriesMap();
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<Category />}></Route>
        </Routes>
    )
}

export default Shop;