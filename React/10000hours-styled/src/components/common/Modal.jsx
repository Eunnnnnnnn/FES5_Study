import React from 'react'
import licat from '../../img/licat.png'
import styled from 'styled-components'
import Button from './Button'

export default function Modal({modalClose}) {
  return (
    <ModalStyle>
      <article>
        <h2>화이팅!!♥♥♥</h2>
        <h3>당신의 꿈을 응원합니다!</h3>
        <img src={licat} alt="응원하는 라이캣" />
        <Button type="button" onClick={modalClose}>종료하고 진짜 훈련하러가기 GO!GO!</Button>
      </article>
    </ModalStyle>
  )
}

const ModalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);

  article {
    display: inline-block;
    padding: 50px 80px;
    background-color: #fff;
    border-radius: 20px;
    color: #5B2386;
    font-family: 'OTEnjoystoriesBA';
  }

  h2 {
    font-size: 60px;
  }

  h3 {
    font-size: 30px;
  }

  img {
    max-width: 340px;
    margin: 0 auto 20px;
    display: block;
  }
`
