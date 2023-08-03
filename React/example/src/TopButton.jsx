import styled from 'styled-components';

export function TopBtn({ contents, handleFunc }) {
    return <TopBtnStyle onClick={handleFunc}>{contents}</TopBtnStyle>;
  }

  const TopBtnStyle = styled.button`
  width: 50px;
  height: 50px;
  font-size: var(--font--size-md);
  background-color: var(--basic-color-1);
  border-radius: 25px;
  color: #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: .3s;
  &:hover {
    background-color: var(--basic-btn-color);
  }
`;