import styled from 'styled-components';

import { BasicHeader } from '../components/header/BasicHeader';
import { ProfileSm } from '../components/common/Profile';
import { NavBar } from '../components/common/NavBar';
import { ResetStyle } from '../style/ResetStyle';
import { GlobalStyle } from '../style/GlobalStyle';

export default function ProfileModification() {
  return(
    <>
    <ChatListPageStyle>
      <ResetStyle />
      <GlobalStyle />
      <BasicHeader />
      <ChatContainerStyle>
        <div className='chat'>
          <ProfileSm url={''}/>
          <span>바베큐좋아</span>
          <p>이번에 고기 언제들어와요?</p>
          <div className='date'>2023.06.15</div>
        </div>
      </ChatContainerStyle>
      <ChatContainerStyle>
        <div className='chat'>
          <ProfileSm url={''}/>
          <span>주말마다캠핑</span>
          <p>어디야 지금 뭐해, 나랑 별 보러 가지 않을래...</p>
          <div className='date'>2023.06.15</div>
        </div>
      </ChatContainerStyle>
      <ChatContainerStyle>
        <div className='chat'>
          <ProfileSm url={''}/>
          <span>팔공산 쳐돌이</span>
          <p>팔공산 정기뻗은~ 태전 동산에 새봄을 알리는...</p>
          <div className='date'>2023.06.15</div>
        </div>
      </ChatContainerStyle>
      <NavBarStyle>
        <NavBar />
      </NavBarStyle>
    </ChatListPageStyle>
    </>
  )
}

const ChatListPageStyle = styled.div`
  background-color: var(--background-color);
  width: 390px;
  height: 844px;
`

const ChatContainerStyle = styled.div`
  width: var(--basic-width);
  height: 66px;
  display: flex;
  align-items: center;
  background-color: #FCFBF3;

img {
  width: 42px;
  height: 42px;
  margin: 0 16px;
}

span {
  width: 120px;
  height: 19px;
}

p {
    width: 240px;
    height: 16px;
    margin: 0 17px;
}

.date {
  display: inline-block;
  color: var(--basic-color-7);
  font-size: 10px;
  margin: 16px 0;
  position: relative;
}
`;

const NavBarStyle = styled.div`
    margin-top: 688px;
`