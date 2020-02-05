# Chatss

_이 프로젝트는 **이진선**씨와 함께 둘이서 진행되는 토이프로젝트이며 저는 프론트를 맡은 **김민수**라고합니다._

_This project is a Toy Project with **Lee Jin-sun**. My name is **Kim Min-soo**, who is in the front desk._

---

## Motivation

_실생활에 적용할 수 있을 법한 의미있는 토이프로젝트를 구상하다 떠오른 아이디어로 단체 익명 채팅방 서비스를 구현하고자 프로젝트를 시작했습니다._

_We started the project to implement group anonymous chat room service with an idea that came up while We was working on a meaningful Toy project that could be applied to real life._

---

## Tech / Framework used

- **Built with**
  - front : React
  - back : Typescript + Express + GCP Compute Engine (not confirm)

---

## Features

_We focused on anonymity and convenience, which is not too private_

---

## Contact

**front** _Minsoo Kim_
**https://github.com/Minsoo-web**

**back** _Jin-sun Lee_
**https://github.com/lenon461**

---

# 2020 01 29 Wed

> docs : Edit README.md

    $yarn create react-app chatss

create-react-app 을 통해 react repository를 만들었습니다.
패키지 매니저는 yarn을 사용했습니다.

    프로젝트에 대한 대략적인 설명과 틀을 작성해 놓았습니다.

# 2020 02 05 Wed

> client : add modulefiles needs

    $yarn add react-router-dom socket.io-client react-scroll-to-bottom react-emoji query-string

react-router-dom : 리액트 라우터를 사용하기 위해 설치
socket.io-client : 소켓 설치
react-scroll-to-bottom : 스크롤 라이브러리
react-emoji : 채팅시 이모지 사용을 위해 설치
query-string : 서버연동을 위해 설치

> client : add chat.js join.js

로그인 화면과 채팅 화면을 위한 컴포넌트와 파일 구성을 했습니다.
