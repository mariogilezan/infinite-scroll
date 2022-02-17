import styled from 'styled-components';

export const GistsListWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const GistItemWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: #ffffff;
  p {
    flex: 1;
    word-break: break-all;
  }
  .imageWrapper {
    height: 6rem;
    width: 6rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
