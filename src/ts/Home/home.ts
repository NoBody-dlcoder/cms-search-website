import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100%;
  background-color: #ffffff;
  border: 1px solid red;
  .container {
    height: 100%;
  }
  .main-content {
    height: calc(100% - 60px);
    display: flex;
    flex-direction: row;
  }
  .right-content {
    height: 100%;
    display: flex;
    flex: 1;
  }
`