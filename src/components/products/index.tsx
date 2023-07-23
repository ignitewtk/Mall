import * as React from 'react'
import ProductList from '../products/ProductList';
import Filter from '../products/Filter';
import { Routes, Route, Navigate } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import { Product } from './Product';
import { useDocumentTitle } from '../../utils';
type Props = {}

type States = {}

export const ProductsView = () => {


    return (
        <>
            <Filter />
            <ProductList />
        </>
    )
}