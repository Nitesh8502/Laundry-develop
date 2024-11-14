'use client';
import React, { createContext, useContext, useState } from "react";

const Context =  createContext({});

export const ContextProvider = ({children, initialData}) => {
    const [orderData, setOrderData] = useState({});
    return <Context.Provider value={{orderData, setOrderData}} >
        {children}
    </Context.Provider>;
};

export const GetContext = () => useContext(Context);

