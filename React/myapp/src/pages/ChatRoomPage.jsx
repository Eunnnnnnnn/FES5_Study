import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useModalControl from "../hooks/useModalControl";
import useImageUploader from '../hooks/useImageUploader';

import  ChatHeader  from '../components/header/ChatHeader';
import { ProfileSm } from '../components/common/Profile';
import { FileUploadSm } from '../components/common/FileUpload';
import { Modal } from './../components/common/Modal';
import SaleItem from '../assets/img/saleItem.png';

export default function ChatRoom() {
  
  const [chatHistory, setChatHistory] =  useState([
    {
      Msg: '캠핑 아이스 박스 사고 싶어서 문의드려요. 혹시 상태가 괜찮은가요? 짐도 많이 들어가는 편인지 궁급합니다. 고기도 함께 구입하고 싶어요. 다음주에 캠핑을 가야해서 급하게 연락합니다.',
      creatAt: '12:39',
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
      Img: SaleItem,
      creatAt: '12:51',
    },
  ]);

  const {openModal, ModalComponent} = useModalControl();
  const navigate = useNavigate();
  const { handleImageChange, imageURL, imagePath, uploadValidity } = useImageUploader();
  const [chatMessage, setChatMessage] = useState('');

  const handleChatRoomOut = () =>{
    navigate(-1)
  }

  const handleSendButtonClick = () => {
    // 메시지 전송 처리 로직 구현
    const newChat = {
      Msg: chatMessage,
      createdAt: null, // 새로운 메시지의 생성 시간을 null로 설정
      };
      setChatHistory([...chatHistory, newChat]);
      setChatMessage('');
    };
    
    useEffect(() => {
    // 이미지 업로드 처리 로직
      if (uploadValidity) {
        const newChat = {
          Img: imageURL,
          createdAt: null,
        };
        setChatHistory([...chatHistory, newChat]);
      }
    }, [uploadValidity]);

    useEffect(() => {
      // chatHistory가 업데이트될 때 실행
      // chatHistory의 마지막 메시지의 생성 시간을 갱신
      const updatedChatHistory = chatHistory.map((item, index) => {
        if (index === chatHistory.length - 1 && item.createdAt === null) {
          // 새로운 메시지의 생성 시간을 현재 시간으로 설정
          return { ...item, createdAt: new Date().toLocaleTimeString() };
        }
        return item;
      });
      setChatHistory(updatedChatHistory);
    }, [chatHistory]);

  return (
    <>
      <ChatHeader name={'바베큐러버'} isButton={true} handleFunc={openModal} />
      <ChatRoomPageStyle>
        {chatHistory.map((item, index) =>
          item.receive ? (
            <ChatContainerStyle key={index}>
              <ProfileSm />
              <p>{item.Msg}</p>
              <span className="time">{item.creatAt}</span>
            </ChatContainerStyle>
          ) : (
            <MyChatContainerStyle key={index}>
              <span className="time">{item.creatAt}</span>
              {!!item.Img || <p>{item.Msg}</p>}
              <img src={item.Img} alt="" />
            </MyChatContainerStyle>
          )
        )}
        <SendStyle aria-label='전송'>
          <div className='upload' >
            <FileUploadSm id="uploading-img" onChange={handleImageChange} aria-label='파일 업로드' />
          </div>
          <InputStyle type={'text'} placeholder='메시지 입력하기...' value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} aria-label='텍스트 입력'></InputStyle>
          <button id='send' onClick={handleSendButtonClick} aria-label='전송 버튼'>전송</button>
        </SendStyle>
      </ChatRoomPageStyle>
      <ModalComponent>
        <Modal contents={['채팅방 나가기']} handleFunc={handleChatRoomOut} />
      </ModalComponent>
    </>
  );
}

const ChatRoomPageStyle = styled.div`
  position: relative;
  height: var(--screen-height);
  padding-top: 24px;

  @media (min-width: 768px) {
    height: var(--screen-nav-height);
  }
`;

const ChatContainerStyle = styled.div`
  display: flex;
  margin: 0 16px 9px;

  p {
    display: inline-block;
    width: 240px;
    margin-left: 16px;
    padding: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 0 10px 10px;
    font-size: var(--font--size-md);
    line-height: 19px;
    color: var(--text-color-1);
  }

  .time {
    display: flex;
    align-items: flex-end;
    margin: 6px;
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
    background-color: var(--basic-color-2);
    border-radius: 10px 0 10px 10px;
    color: #fff;
    font-size: var(--font--size-md);
    color: var(--common-text-color-1);
  }

  img {
    border-radius: 10px;
  }

  .time {
    display: flex;
    align-items: flex-end;
    margin: 6px;
    font-size: 10px;
    color: #767676;
  }
`;

const SendStyle = styled.div`
  position: absolute;
  bottom: 0px;
  width: var(--basic-width);
  height: 61px;
  display: flex;
  align-items: center;
  background-color: var(--background-color);

  .upload {
    margin-left: 16px;
  }

  input {
    width: 260px;
    margin: 0 18px;
    font-size: var(--font--size-md);
    background-color: var(--background-color);
    
    @media (min-width: 768px) {
      width: 393px;
    }
  }

  button {
    width: 55px;
    height: 19px;
    font-size: var(--font--size-md);
    color: #c4c4c4;
    display: inline-block;
    transition: 0.5s;
    &:hover {
      color: var(--basic-color-5);
    }
  }
`;

const InputStyle = styled.input`
  color: var(--text-color-1);
  ::placeholder {
    color: var(--text-color-2);
  }
`;
