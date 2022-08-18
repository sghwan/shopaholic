# 쇼핑몰 웹 서비스 프로젝트

제품들을 조회하고, 장바구니에 추가하고, 또 주문을 할 수 있는 쇼핑몰 웹 서비스 제작 프로젝트입니다. <br />
**웹 구현 예시** (링크는 프로젝트 기간에만 유효합니다)

### http://shopping-demo.elicecoding.com/

<br>

** 핵심 기능은 하기입니다. (이외에도 더 있으며, 추가 안내 될 프로젝트 평가기준표에서 구체화될 예정입니다.) <br>
1. 회원가입, 로그인, 회원정보 수정 등 **유저 정보 관련 CRUD** 
2. **제품 목록**을 조회 및, **제품 상세 정보**를 조회 가능함. 
3. 장바구니에 제품을 추가할 수 있으며, **장바구니에서 CRUD** 작업이 가능함.
4. 장바구니는 서버 DB가 아닌, 프론트 단에서 저장 및 관리됨 (localStorage, indexedDB 등)
5. 장바구니에서 주문을 진행하며, **주문 완료 후 조회 및 삭제**가 가능함.

## 주요 사용 기술

### 1. 프론트엔드

- **Vanilla javascript**, html, css (**Bulma css**)
- Font-awesome 
- Daum 도로명 주소 api 
- 이외

### 2. 백엔드 

- **Express** (nodemon, babel-node로 실행됩니다.)
- Mongodb, Mongoose
- cors
- 이외

## 폴더 구조
- 프론트: `src/views` 폴더 
- 백: src/views 이외 폴더 전체
- 실행: **프론트, 백 동시에, express로 실행**



## 설치 방법

1. **.env 파일 설정 (MONGODB_URL 환경변수를, 개인 로컬 혹은 Atlas 서버 URL로 설정해야 함)**

2. express 실행

```bash
# npm 을 쓰는 경우 
npm install
npm run start

# yarn 을 쓰는 경우
yarn
yarn start
```

<br>

---

본 프로젝트에서 제공하는 모든 코드 등의는 저작권법에 의해 보호받는 ㈜엘리스의 자산이며, 무단 사용 및 도용, 복제 및 배포를 금합니다.
Copyright 2022 엘리스 Inc. All rights reserved.


<div align="center">
  <img width='15%' src='https://user-images.githubusercontent.com/101157141/180495615-d773735a-c0b1-480c-ba15-87b571e9a4e3.png'/>
  <img width='55%' src="https://user-images.githubusercontent.com/101157141/180495469-a50408d1-4115-4365-814d-889204bcd186.gif"/>
</div>

<br/>

<div align='center'>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=fff"/>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?logo=Node.js&logoColor=fff"/>
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=fff"/>
  <img alt="Express" src="https://img.shields.io/badge/Express-000000?logo=Express&logoColor=fff"/>
  <img alt="Redux" src="https://img.shields.io/badge/Redux-764ABC?logo=Redux&logoColor=fff"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-47A248?logo=MongoDB&logoColor=fff"/>
  <img alt="GCP" src="https://img.shields.io/badge/Google Cloud-4285F4?logo=Google Cloud&logoColor=fff"/>
</div>

<br/>

## 🧳 [여행가다](http://kdt-sw2-seoul-team05.elicecoding.com/)

혼자, 친구, 가족 혹은 연인과 함께 떠날 즐거운 국내여행을
계획하는데 도움을 주는 서비스를 제작하는 프로젝트에요 
<br/>
여행 일정 짜는 평균 소요시간은 10시간, 이제 5분 만에 해결하세요.
가고 싶은 장소만 선택하여 최적화된 일정을 만들 수 있어요!

1. 여행 도시 선택!
2. 여행 일자 선택!
3. 가고 싶은 장소 담기!
4. 일정 생성하기 끝!

많은 사람과 당신의 여행계획을 공유해 보세요!

`여행가다`는 여행자들이 보다 편하고 쉽게 일정을 만들 수 있도록
커뮤니티 여행 플래너를 서비스입니다.

## 📰 서비스 기획 의도

- 사용자들에게 도움을 주는 서비스가 무엇이 있을까라는 생각에서 출발했습니다. 
- 여행이라는 주제와 접목하여 여행을 할 때 사용자들이 필요로 하는 것을 생각했습니다.
- 지역을 정하고 지도에서 검색을 통한 지역 관광지들을 보다 쉽게 확인하고 대략적인 여행 루트를 보여줌으로써 
  사용자들에게 편의성을 제공하고자 하였습니다. 

## 🙂 팀원소개
| 이  찬 | 임병준 | 박상준 | 서경환 | 김성은 |
| --------- | -------- | -------- | -------- | -------- |
| 프론트 | 백엔드  | 프론트 | 백엔드 | 프론트 |
| 커뮤니티, 사용자 | 여행 계획, 여행 상세 계획 | Plan페이지, 카카오 맵 | 사용자 인증, 커뮤니티 | 드래그&드랍, 초기셋팅 |



## 📌 Learn More

| Resource | Description |
| ------ | ------ |
| 💻[**API**](https://github.com/TeamGada/gada/wiki/API) | 🗒[**기능 정리**](https://github.com/TeamGada/gada/wiki/%EA%B8%B0%EB%8A%A5-%EC%A0%95%EB%A6%AC) | 
|📋[**스토리보드**](https://github.com/TeamGada/gada/wiki/%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C) | 🔧[**와이드프레임**](https://github.com/TeamGada/gada/wiki/%EC%99%80%EC%9D%B4%EC%96%B4-%ED%94%84%EB%A0%88%EC%9E%84)|
| 🧰[**ERD**](https://github.com/TeamGada/gada/wiki/ERD) | 🏙[**컨벤션**](https://github.com/TeamGada/gada/wiki/%EC%BB%A8%EB%B2%A4%EC%85%98) |
| 🚂[서비스 구조도](https://github.com/TeamGada/gada/wiki/%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B5%AC%EC%A1%B0%EB%8F%84) | --- |
