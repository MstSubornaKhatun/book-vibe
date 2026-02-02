import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../components/pages/Root/Root';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import Home from '../components/pages/Home/Home';
import About from '../components/About/About';
import BookDetails from '../components/BookDetails/BookDetails';
import ReadList from '../components/pages/ReadList/ReadList';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>, // ulta palta url a gele ata dekhabe
    children: [
        {
            index: true,
            loader: ()=>fetch('booksData.json'),
            path: "/",
            Component: Home,
        },
        {
            path: "about",
            Component: About
        },
        {
            path: 'readList',
            loader: ()=>fetch('./booksData.json'),
            Component: ReadList

        },

        {
            path: "/bookDetails/:id",
            loader: ()=>fetch('./booksData.json'),
            Component: BookDetails
        }

    ]
},
]);

