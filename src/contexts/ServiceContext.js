import React, {useState} from 'react';

const ServiceContext = React.createContext([false, () => {}]);

const ServiceProvider = ({children}) => {
    const [state, setState] = useState(false);

    return(
        <ServiceContext.Provider value={[state, setState]}>
            {children}
        </ServiceContext.Provider>
    );
};

export {ServiceContext, ServiceProvider };