import React, {useState} from 'react';

const ServiceContext = React.createContext([false, () => {}]);

const ServiceProvider = ({children}) => {
    //const [state, setState] = useState(false);
    const [selected, setSelected] = useState(false);
    const [services, setServices] = useState([]);
    return(
        <ServiceContext.Provider value={{selected, setSelected, services, setServices}}>
            {children}
        </ServiceContext.Provider>
    );
};

export {ServiceContext, ServiceProvider };