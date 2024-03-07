import React, { createContext, useState, useContext } from "react";

export const SelectedContext = createContext();
export const useSelected = () => useContext(SelectedContext)
export const SelectedProvider = ({ children }) => {
    const [selected, setSelected] = useState('')


    return (
        <SelectedContext.Provider value={{ selected, setSelected }}>
            {children}
        </SelectedContext.Provider>
    )
}