import React, { createContext, useReducer } from 'react';

const initialState = {
    expenses: [
        {id: "Shirt", name: 'Shirt', quantity: 0, unitprice: 500 },
        {id: "Jeans", name: 'Jeans', quantity: 0, unitprice: 300 },
        {id: "Dress", name: 'Dress', quantity: 0, unitprice: 400 },
        {id: "Dinner set", name: 'Dinner set', quantity: 0, unitprice: 600 },
        {id: "Bags", name: 'Bags', quantity: 0, unitprice: 200}
    ],
    Location: 'E'
};