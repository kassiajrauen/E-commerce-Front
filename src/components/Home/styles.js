import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    background-color: #F7B213;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    div{
        display: flex;
        border-radius: 5px;
    }

    .header{
        width: 326px;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;

        h1{
            color: #ffffff;
            font-size: 26px;
            font-weight: 700;
        }
    }

    .historic{
        width: 326px;
        height: 446px;
        background-color: #FFFFFF;
        justify-content: center;
        margin-top: 22px;
        margin-bottom: 14px;
        flex-direction: column;

        span{
            text-align: center;
            line-height: 24px;
            color: #BFBFBF;
            font-size: 20px;
            font-weight: 400;

            .date{
                color: #C6C6C6;
            }

            .services{
                color: #000000;
            }

            .value{
                color: #000000;
            }
        }
    }

    .buttons{
        gap: 15px;
    }
    

    button{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        width: 150px;
        height: 50px;
        color: #FFFFFF;
        background-color: #CB6632;
        border-radius: 5px;
        border: 1px solid #CB6632;
        font-size: 18px;
        font-weight: 700;
    }
`

export {Container};