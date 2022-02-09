import React, {useState} from 'react';

const UserContext = React.createContext([false, () => {}]);

const UserProvider = ({children}) => {
    const [state, setState] = useState(false);

    return(
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    );
};

export {UserContext, UserProvider};