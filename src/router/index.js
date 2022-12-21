import React from "react";
import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import CategoryView from "../views/category";
import ItemView from "../views/itemView";
import CartView from "../views/cartView";
import CheckView from "../views/checkView";

export const router = createBrowserRouter([
    {
        path: "/",
        element: < App />,
    },
    {
        path: "/category/:category",
        element: < CategoryView />,
    },
    {
        path: "/item/:id",
        element: < ItemView />,
    },
    {
        path: "/cart",
        element: < CartView />
    },
    {
        path: "/checkView",
        element: < CheckView />
    },
]);