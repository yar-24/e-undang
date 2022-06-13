import React from "react";
import styled from "styled-components";

const Container = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
`

const Layout = ({ children }) => {
    return (
        <>
            <Container>{children}</Container>
        </>
    );
};

export default Layout;