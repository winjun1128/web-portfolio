import { useState } from "react";
import "./App.css";

export default function App() {
  const [showRole1, setShowRole1] = useState(false);
  const [showRole2, setShowRole2] = useState(false);
  const [showRole3, setShowRole3] = useState(false);

  return (
    <div className="App">
      <h1>한승준의 포트폴리오</h1>

      {/* 카드 1 */}
      <div className="port-container">
        <div className="port-video">
          <video src="https://winjun1128.github.io/web-portfolio/videos/miniafterfirst.mp4" controls />
        </div>
        <div className="port-info">
          <h3>주제 : 커뮤니티 기반 크라우드 펀딩 사이트</h3>
          <p>📆일정 : 2025-05-28 ~ 2025-06-13</p>
          <p>사용기술 : React</p>
          <p>설명 : 기존 크라우드 펀딩과 다른 커뮤니티 기능을 추가해 판매자와 구매자의 소통 강화</p>
          <p>깃허브 : <a href="https://github.com/winjun1128/CommunityCloudFunding">https://github.com/winjun1128/CommunityCloudFunding</a></p>
          <p>
            <button
              onClick={() => setShowRole1(v => !v)}
              aria-expanded={showRole1}
              aria-controls="role-1"
            >
              {showRole1 ? "역할 닫기" : "역할 보기"}
            </button>
          </p>
        </div>
      </div>
      <div id="role-1" className={`port-role-container ${showRole1 ? "open" : ""}`} aria-hidden={!showRole1}>
        <div className="port-role-inner">
          <div className="port-video">
            <video src="https://winjun1128.github.io/web-portfolio/videos/minimyfirst.mp4" controls />
          </div>
          <div className="port-info">
            <p>역할 : 홈, 리스트, 상품, 게시판 페이지 구현 및 팀 리드</p>
          </div>
        </div>
      </div>

      {/* 카드 2 */}
      <div className="port-container">
        <div className="port-video">
          <video src="https://winjun1128.github.io/web-portfolio/videos/miniaftersecond.mp4" controls />
        </div>
        <div className="port-info">
          <h3>주제 : 기업 스케줄 및 할일 관리 서비스</h3>
          <p>📆일정 : 2025-07-28 ~ 2025-08-14</p>
          <p>사용기술 : Spring framework, Oracle</p>
          <p>깃허브 : <a href="https://github.com/winjun1128/BizBoard">https://github.com/winjun1128/BizBoard</a></p>
          <p>
            <button
              onClick={() => setShowRole2(v => !v)}
              aria-expanded={showRole2}
              aria-controls="role-2"
            >
              {showRole2 ? "역할 닫기" : "역할 보기"}
            </button>
          </p>
        </div>
      </div>
      <div id="role-2" className={`port-role-container ${showRole2 ? "open" : ""}`} aria-hidden={!showRole2}>
        <div className="port-role-inner">
          <div className="port-video">
            <video src="https://winjun1128.github.io/web-portfolio/videos/minimysecond.mp4" controls />
          </div>
          <div className="port-info">
            <p>역할 : 작업관리, 메모, 알림 기능 설계·구현</p>
          </div>
        </div>
      </div>

      {/* 카드 3 */}
      <div className="port-container">
        <div className="port-video">
          <video src="https://winjun1128.github.io/web-portfolio/videos/miniafterthird.mp4" controls />
        </div>
        <div className="port-info">
          <h3>주제 : 주유소/전기차 충전소 정보 제공 및 추천</h3>
          <p>📆일정 : 2025-08-21 ~ 2025-09-12</p>
          <p>사용기술 : React, Spring framework, Oracle</p>
          <p>깃허브 : <a href="https://github.com/winjun1128/oilmoney">https://github.com/winjun1128/oilmoney</a></p>
          <p>
            <button
              onClick={() => setShowRole3(v => !v)}
              aria-expanded={showRole3}
              aria-controls="role-3"
            >
              {showRole3 ? "역할 닫기" : "역할 보기"}
            </button>
          </p>
        </div>
      </div>
      <div id="role-3" className={`port-role-container ${showRole3 ? "open" : ""}`} aria-hidden={!showRole3}>
        <div className="port-role-inner">
          <div className="port-video">
            <video src="https://winjun1128.github.io/web-portfolio/videos/minimythird.mp4" controls />
          </div>
          <div className="port-info">
            <p>역할 : 경로 페이지 전담 및 주유소/충전소 페이지 일부 구현</p>
          </div>
        </div>
      </div>
    </div>
  );
}
