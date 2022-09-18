import styled, { css } from "styled-components";

 const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
 `;

 const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
 `;

 const IntroShape = styled.div`
    ${Shape}
    clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
    background-color: crimson;
 `;

 const FeaturedShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
    background-color: pink;
 `;
 const ServiceShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
    background-color: #f88497;
 `;

 const PriceShape = styled.div`
    ${Shape}
    clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
    background-color: crimson;
 `;

 export { Container, PriceShape, IntroShape, FeaturedShape, ServiceShape };
