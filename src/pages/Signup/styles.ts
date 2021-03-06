import styled, { keyframes } from 'styled-components';
import imageBackground from '../../assets/salao.png';

import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(0)
    }
    to {
        opacity: 1;
        transform: translateX(-50px);
    }
`;

export const AnimationContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 1s;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;

            transition: all 0.2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')};
            }
        }
    }

    > a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;

        display: flex;
        align-items: center;

        transition: all 0.2s;

        &:hover {
            color: ${shade(0.2, '#F4EDE8')};
        }

        svg {
            margin-right: 16px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${imageBackground}) no-repeat center;
    background-size: cover;
`;
