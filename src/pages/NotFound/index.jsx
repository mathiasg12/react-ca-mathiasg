import React from 'react';
import styled from 'styled-components';
const StyledHeadingContainer = styled.div`
  max-width: fit-content;
  margin: 0 auto;
`;
/**
 * component that return the page not found page
 * because of the small amount of styling needed I use styled components instead of css module
 */
export function NotFound() {
  return (
    <main>
      <StyledHeadingContainer>
        <h1>404 Page not found</h1>
        <h2>Sorry this page do not exist</h2>
      </StyledHeadingContainer>
    </main>
  );
}
