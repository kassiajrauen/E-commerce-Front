import styled from "styled-components";

const StyledShoppingCart = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
   // align-items: center;
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
        width: 90%;
        height: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center; 
        padding: 20px 16px;
        background-color: white;
        border-radius: 12px;
        border: solid 3px #7E7E7E;
        
    }
    .service button{
        width: 100px;
        height: 20px;
        display: flex;
        align-items: center;
        background-color: red;    
        border: 0;
    }
    .service img{
        height: 75px;
        width: 120px;
    }
    .service h3, .service h2 {
        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 700;
        color: black;
        padding: 10 px;
        text-decoration: none;
    }
   
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: 25px ;
        padding: 10px 0;
        background: green;
        color: #fff;
        padding: 20px;
        margin-left: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 30px;       
        text-align: center;
        font-size: 12px ;
        border: 0;
        font-size: 1.2em;
        cursor: pointer;
    }
    
    // checkout
    .confirmation {
        position: absolute;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .close{
        position: fixed;
        border-radius: 5px;
        height: 30px;
        width: 30px;
        padding-top: 1px;
        padding-right: 1px;
        top: 24px;
        right: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
    .container-confirmation {
        position: relative;
        width: 248px;
        height: 210px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        z-index: 2000;
    }
    .container-confirmation h1 {
        color: black;
        font-family: Lexend Deca;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin-bottom: 47px;
    }
    .yes-no{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        margin-bottom: -15px;
    }
    .no{
        height: 52px;
        width: 95px;
        background-color: #CECECE;
        border-radius: 8px;
        color: white;
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 14px;
    }

    .yes{
        height: 52px;
        width: 95px;
        background-color: #F7B213;
        border-radius: 8px;
        color: white;
        font-family: Lexend Deca;
        font-weight: 400;
        font-size: 14px;
    }
`

export { StyledShoppingCart };