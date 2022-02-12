import styled from "styled-components";

const StyledShoppingCart = styled.div`
    /* display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center; */
    gap:24px;
    background-color: #F7B213;
    width: 100%;
    height: 100vh;
    h1 {        
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 700;
        color: #FFFFFF;
        padding: 10px;
    }
    h1 img{
        height: 24px;
        width: 24px;
    }
    
    .services-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start; 
        flex-wrap: wrap;
        padding: 10px;
        gap: 10px;
    }
    .service {
        width: 150px;
        height: 150px;
        /* display: flex;
        justify-content: space-between;
        align-items: center; */
        padding: 20px 16px;
        background-color: white;
        border-radius: 12px;
        border: solid 3px #7E7E7E;
        cursor: pointer;
    }
    .service.selected{
        border: 5px solid green;
    }
    .service img{
        height: 75px;
        width: 120px;
    }
    .service h3 h2 {
        font-family: Lexend Deca;
        font-size: 24px;
        font-weight: 700;
        color: #FFFFFF;
        padding: 10 px;
        text-decoration: none;
    }

    button {
        display: block;
        width: 80%;
        padding: 10px 0;
        background: green;
        color: #fff;
        padding: 20px;
        margin: 25px;
        border-radius: 30px;       
        text-align: center;
        border: 0;
        font-size: 1.2em;
        cursor: pointer;
    }
`

export { StyledShoppingCart };