import styled from 'styled-components';

import { ChatHeader } from '../components/header/ChatHeader';
import { ProfileSm } from '../components/common/Profile';
import { FileUploadSm } from '../components/common/FileUpload';
import saleItem from '../assets/testImg/saleItem3.png';

export default function ChatRoom() {
  
  const chatHistory = [
    {
      Msg: '캠핑 아이스 박스 사고 싶어서 문의드려요. 혹시 상태가 괜찮은가요? 짐도 많이 들어가는 편인지 궁급합니다. 고기도 함께 구입하고 싶어요. 다음주에 캠핑을 가야해서 급하게 연락합니다.',
      creatAT: '12:39',
      receive: true,
    },
    {
      Msg: '이번에 고기 언제 들어와요?',
      creatAt: '12:41',
      receive: true,
    },
    {
      Msg: '고기는 다 먹었는데요',
      creatAt: '12:50',
    },
    {
      Img: saleItem,
      creatAt: '12:50',
    },
  ];

  return (
    <>
      <ChatRoomPageStyle>
        <ChatHeader />
        {chatHistory.map((item) => {
          return (
            <>
              {item.receive && (
                <ChatContainerStyle>
                  <ProfileSm />
                  <p>{item.Msg}</p>
                  <span className="time">{item.creatAt}</span>
                </ChatContainerStyle>
              )}
              {!item.receive && (
                <MyChatContainerStyle>
                  <span className="time">{item.creatAt}</span>
                  {!!item.Img || <p>{item.Msg}</p>}
                  <img src={item.Img} alt="" />
                </MyChatContainerStyle>
              )}
            </>
          );
        })}
        {/* <ChatContainerStyle>
        <ProfileSm />
        <p>캠핑 아이스 박스 사고 싶어서 문의드려요. 혹시 상태가 괜찮은가요? 짐도 많이 들어가는 편인지 궁급합니다. 고기도 함께 구입하고 싶어요. 다음주에 캠핑을 가야해서 급하게 연락합니다.</p>
        <span className='time'>12:39</span>
      </ChatContainerStyle>
      <ChatContainerStyle>
        <ProfileSm />
        <p>이번에 고기 언제 들어와요?</p>
        <span className='time'>12:41</span>
      </ChatContainerStyle>
      <MyChatContainerStyle>
        <span className='time'>12:50</span>
        <p>고기는 다 먹었는데요</p>
      </MyChatContainerStyle>
      <MyChatContainerStyle>
        <span className='time'>12:50</span>
        <img src={saleItem} alt ='' />
      </MyChatContainerStyle> */}
        <SendStyle>
          <div className="upload">
            <FileUploadSm />
          </div>
          <InputStyle
            type={'text'}
            placeholder="메시지 입력하기..."
          ></InputStyle>
          <button id="send">전송</button>
        </SendStyle>
      </ChatRoomPageStyle>
    </>
  );
}

const ChatRoomPageStyle = styled.div`
  width: var(--basic-width);
  height: var(--basic-height);
  background-color: var(--background-color);
`;

const ChatContainerStyle = styled.div`
  display: flex;
  margin: 9px 16px;
  align-items: end;

  p {
    display: inline-block;
    width: 240px;
    margin-left: 16px;
    padding: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 0 10px 10px;
    font-size: var(--font--size-md);
    line-height: 19px;
  }

  .time {
    margin-left: 6px;
    font-size: 10px;
    color: #767676;
  }
`;

const MyChatContainerStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-top: 9px;
  margin-right: 15px;

  p {
    display: inline-block;
    padding: 10px;
    background-color: var(--basic-color-3);
    border-radius: 10px 0 10px 10px;
    color: #fff;
    font-size: var(--font--size-md);
  }

  .time {
    margin: 4px;
    font-size: 10px;
    color: #767676;
  }
`;

const SendStyle = styled.div`
  height: 61px;
  display: flex;
  align-items: center;
  background-color: var(--background-color);

  .upload {
    margin-left: 16px;
  }

  input {
    width: 230px;
    margin: 0 18px;
    font-size: var(--font--size-md);
    background-color: var(--background-color);
  }

  button {
    width: 55px;
    height: 19px;
    margin-left: px;
    font-size: var(--font--size-md);
    color: #c4c4c4;
    display: inline-block;
    transition: 0.5s;
    &:hover {
      color: var(--basic-color-4);
    }
  }
`;

const InputStyle = styled.input`
  ::placeholder {
    color: #c4c4c4;
  }
`;
