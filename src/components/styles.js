import styled, { css } from "styled-components"
  
const width = '70vw', height='70vh';

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    background-color: #333;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: ${height};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);


    @media screen and (max-width: 700px) {
        width: 100%;
    }
    @media screen and (max-height: 700px) {
        width: 100%;
    }
`;
export const Arrow = styled.div`
    text-shadow: 1px 1px 1px #333;
    z-index: 100;
    line-height: ${height};
    text-align: center;
    position: absolute;
    top: 0;
    width: 10%;
    font-size: 3em;
    cursor: pointer;
    color: rgb(232,205,136);

    user-select: none;
    ${props => props.right ? css`left: 90%;` : css`left: 0%;`}

    &:hover {
        color: #333;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.8em;
    }
    @media screen and (max-height: 500px) {
        font-size: 1.8em;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    transition: transform .2s;

    &:hover {
        transform: scale(1.2);
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
    @media screen and (max-height: 700px) {
        width: 100%;
    }
`

export const Overlay = styled.div`
    width: ${width};
    height: ${height};
    background-color: rgba(232,205,136,0.2);
    transition: background-color .2s;

    &:hover {
        background-color: transparent;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
    @media screen and (max-height: 700px) {
        width: 100%;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    color: rgb(232,205,136);
    font-family: 'Jost', sans-serif;
`

export const Title = styled.h1`
        font-size: 4em;
        margin: 0;
        text-align: center;

        @media screen and (max-height: 500px) {
            font-size: 2em;
        }
`

export const Dot = styled.span`
  font-size: 2em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #333;
  user-select: none;
  color: rgb(232,205,136);



  &:hover {
      color: #333;
  }
`;
export const Dots = styled.span`
  text-align: center;
  width: ${width};
  position: relative;
  z-index: 100;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
    @media screen and (max-height: 700px) {
        width: 100%;
    }
`;

export const Children  = styled.div`
  width: ${width};
  height: ${height};
  position: relative;

@media screen and (max-width: 700px) {
      width: 100%;
}
@media screen and (max-height: 700px) {
      width: 100%;
}
`;

