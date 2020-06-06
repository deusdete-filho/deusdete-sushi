import styled from 'styled-components';

export const Container = styled.div`
  background: #0f0f0f;
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
        button {
          &:hover {
            background: #666;
          }

          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #fff;
          color: #0f0f0f;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
