import React, {useState} from 'react';

const TokenContext = React.createContext([false, () => {}]);

const TokenProvider = ({children}) => {
    const [state, setState] = useState(false);

    return(
        <TokenContext.Provider value={[state, setState]}>
            {children}
        </TokenContext.Provider>
    );
};

export {TokenContext, TokenProvider};