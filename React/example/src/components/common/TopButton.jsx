import styled from 'styled-components';
import Top from '../../assets/img/Top.png';

export function TopBtn({ handleFunc }) {
  return <TopBtnStyle onClick={handleFunc}></TopBtnStyle>;
}

const TopBtnStyle = styled.button`
  width: 50px;
  height: 50px;
  background: url(${Top}) no-repeat center center;
  border-radius: 50px;
`;