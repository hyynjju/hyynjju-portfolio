(() => {
  const notes = [
    {
      slug: 'pay-id', cover: '/assets/projects/pay-id/cover/cover.jpg', date: '2026-10-21',
      tags: { ja: ['UX Research', 'Data Analysis', 'UI Design'], ko: ['UX Research', 'Data Analysis', 'UI Design'], en: ['UX Research', 'Data Analysis', 'UI Design'] },
      content: {
        ja: { title: 'フォロー中のショップから探せる商品検索体験', summary: '購買データとユーザーの声をもとに、複数ショップを横断して商品を探せるUIを提案しました。', sections: [
          ['プロジェクト概要', ['「PAY ID」のインターンシップ課題として、アプリ内の商品検索体験の改善に取り組みました。検索結果へのユーザーの不満と購買データに着目し、フォロー中のショップから欲しい商品を探しやすくするUIを提案しました。']],
          ['課題の発見', ['PAY IDチームへのヒアリングに加え、購買データや検索満足度アンケートをもとに、ユーザーが商品を探す際の課題を分析しました。', 'フォロー中のショップで商品を探すとき、ショップごとに同じ検索を繰り返す必要がある点に着目しました。']],
          ['提案と取り組み', ['フォロー中の複数ショップを対象に商品を検索できる機能と、検索結果をフォロー中のショップに絞り込めるUIを設計しました。', 'ユーザー調査から課題設定、UI設計、プロトタイプの実装まで、5日間で取り組みました。']]
        ] },
        ko: { title: '팔로우한 숍을 한 번에 탐색하는 상품 검색 경험', summary: '구매 데이터와 사용자 의견을 바탕으로 여러 숍의 상품을 한 번에 찾는 UI를 제안했습니다.', sections: [
          ['프로젝트 개요', ['PAY ID 인턴십 과제로 앱 내 상품 검색 경험을 개선했습니다. 검색 결과에 대한 사용자 불만과 구매 데이터를 살펴보고, 팔로우한 숍에서 원하는 상품을 쉽게 찾을 수 있는 UI를 제안했습니다.']],
          ['문제 발견', ['PAY ID 팀원 인터뷰와 구매 데이터, 검색 만족도 설문을 바탕으로 상품 탐색 과정의 문제를 분석했습니다.', '팔로우한 숍에서 상품을 찾을 때 숍마다 같은 검색을 반복해야 한다는 점에 주목했습니다.']],
          ['제안과 진행', ['팔로우한 여러 숍의 상품을 한 번에 검색하고, 결과를 팔로우한 숍으로 좁혀 볼 수 있는 UI를 설계했습니다.', '사용자 조사와 문제 정의부터 UI 설계, 프로토타입 구현까지 5일 동안 진행했습니다.']]
        ] },
        en: { title: 'Finding products across followed shops', summary: 'A search experience that helps people find products across multiple followed shops, informed by purchase data and user feedback.', sections: [
          ['Project overview', ['For an internship assignment at PAY ID, I worked on improving in-app product search. I focused on user dissatisfaction with search results and purchase data, then proposed a UI that makes it easier to find products from followed shops.']],
          ['Identifying the problem', ['Interviews with the PAY ID team, purchase data, and a search satisfaction survey helped me understand how people look for products.', 'I found that users had to repeat the same search separately for every shop they followed.']],
          ['Proposal and process', ['I designed a way to search across multiple followed shops and filter results to those shops.', 'I completed the work—from user research and problem framing to UI design and prototyping—in five days.']]
        ] }
      }
    },
    {
      slug: 'medeasy', cover: '/assets/projects/medeasy/cover/cover.png', date: '2026-10-21',
      tags: { ja: ['Frontend', 'Voice UI', 'AI'], ko: ['Frontend', 'Voice UI', 'AI'], en: ['Frontend', 'Voice UI', 'AI'] },
      content: {
        ja: { title: '声で使える服薬管理を目指したMedEasy', summary: '音声対話と保護者連携を通じて、日々の服薬管理を支援するAIアシスタント。', sections: [
          ['プロジェクト概要', ['MedEasyは、高齢者など複雑なアプリ操作が難しい人のための対話型AI服薬管理サービスです。私はフロントエンドを担当しました。']],
          ['操作の負担を減らす', ['画面上の複雑なフォームに頼らず、音声対話を中心に服薬状況を確認・登録・記録できる体験を設計しました。処方箋や薬の撮影、NFCタグも入力手段として活用します。', 'MCPとLangGraphを基盤とするAIエージェントが、会話を通じて服薬管理の操作を実行します。']],
          ['本人と保護者をつなぐ', ['服薬を忘れた場合は保護者にリアルタイムで通知し、アカウント連携によって離れた場所から服薬状況を確認できます。', '医薬品の公的データ、画像認識、OCRを組み合わせ、薬の情報や飲み合わせ、服用時の注意点を確認できる構成です。錠剤画像検索は95%以上の精度を目指しています。']]
        ] },
        ko: { title: '음성으로 관리하는 복약 서비스 MedEasy', summary: '음성 대화와 보호자 연동으로 일상적인 복약 관리를 돕는 AI 비서입니다.', sections: [
          ['프로젝트 개요', ['MedEasy는 고령자처럼 복잡한 앱 조작이 어려운 사용자를 위한 대화형 AI 복약 관리 서비스입니다. 저는 프론트엔드 개발에 참여했습니다.']],
          ['조작 부담 줄이기', ['복잡한 폼 입력 대신 음성 대화를 중심으로 복약 현황을 확인·등록·기록할 수 있도록 설계했습니다. 처방전과 약 촬영, NFC 태깅도 입력 수단으로 활용합니다.', 'MCP와 LangGraph 기반 AI 에이전트가 대화를 통해 복약 관리 기능을 실행합니다.']],
          ['사용자와 보호자 연결', ['복약을 놓치면 보호자에게 실시간 알림을 보내고, 계정을 연동하면 멀리서도 복약 상태를 확인할 수 있습니다.', '의약품 공공데이터와 이미지 인식, OCR을 결합해 약 정보와 병용 금기, 복용 시 주의사항을 제공합니다. 알약 이미지 검색은 95% 이상의 정확도를 목표로 합니다.']]
        ] },
        en: { title: 'MedEasy: voice-led medication management', summary: 'A conversational AI assistant designed to support daily medication routines and caregiver coordination.', sections: [
          ['Project overview', ['MedEasy is a conversational AI medication management service for people who find complex app interactions difficult, including older adults. I contributed to frontend development.']],
          ['Reducing interaction effort', ['The experience centers on voice conversations so people can check, add, and record medication without navigating complex forms. Prescription and pill photos, along with NFC tags, provide additional ways to enter information.', 'An AI agent built with MCP and LangGraph carries out medication management actions through conversation.']],
          ['Connecting users and caregivers', ['When a dose is missed, the service sends a real-time notification to a caregiver. Linked accounts also make it possible to check medication status remotely.', 'Public medicine data, image recognition, and OCR provide medicine details and safety information. Pill image search is designed to reach over 95% accuracy.']]
        ] }
      }
    },
    {
      slug: 'ontime', cover: '/assets/projects/ontime/cover/cover.png', date: '2026-10-21',
      tags: { ja: ['UI/UX', 'Design System', 'Component Design'], ko: ['UI/UX', 'Design System', 'Component Design'], en: ['UI/UX', 'Design System', 'Component Design'] },
      content: {
        ja: { title: '通勤前の準備をスムーズにするOnTime', summary: '到着したい時刻から出発時刻と経路を確認できるアプリのUI/UXとデザインシステムを設計しました。', sections: [
          ['プロジェクト概要', ['現役エンジニア3名と協働し、通勤時の出発準備を効率化するアプリ「OnTime」のUI/UXデザインとデザインシステムを担当しました。']],
          ['毎日の出発準備を簡潔に', ['到着したい時刻を設定すると、リアルタイムの交通状況を踏まえた出発時刻と経路を確認できます。毎回ルートを検索し、出発時刻を計算する手間を減らすことを目指しました。']],
          ['開発を見据えた設計', ['既存の企画書をもとに機能ごとの画面を設計し、カラー、タイポグラフィ、共通コンポーネントを整理しました。', 'コンポーネントの種類や状態を定義し、デザインの意図が開発メンバーに伝わり、実装時に参照しやすい構成にしました。']]
        ] },
        ko: { title: '출근 준비를 간결하게 돕는 OnTime', summary: '희망 도착 시각에 맞춰 출발 시간과 경로를 확인하는 앱의 UI/UX와 디자인 시스템을 설계했습니다.', sections: [
          ['프로젝트 개요', ['현직 엔지니어 3명과 협업해 출근 준비를 효율화하는 앱 OnTime의 UI/UX 디자인과 디자인 시스템을 담당했습니다.']],
          ['매일의 출발 준비 간소화', ['도착 희망 시각을 설정하면 실시간 교통 상황에 맞춘 출발 시각과 경로를 확인할 수 있습니다. 매일 경로를 검색하고 출발 시간을 계산하는 수고를 줄이는 것이 목표였습니다.']],
          ['개발을 고려한 설계', ['기존 기획서를 바탕으로 기능별 화면을 설계하고 색상, 타이포그래피, 공통 컴포넌트를 정리했습니다.', '컴포넌트 종류와 상태를 정의해 개발팀이 디자인 의도를 이해하고 구현할 때 참고하기 쉬운 구조로 구성했습니다.']]
        ] },
        en: { title: 'OnTime: making the commute morning simpler', summary: 'UI/UX and a design system for an app that helps people plan routes and departure times around their desired arrival.', sections: [
          ['Project overview', ['I worked with three practicing engineers on the UI/UX and design system for OnTime, an app intended to make getting ready for a commute more efficient.']],
          ['Simplifying the morning routine', ['Users set their desired arrival time and see a departure time and route based on real-time traffic. The goal was to reduce the repeated effort of searching routes and calculating when to leave.']],
          ['Designing with implementation in mind', ['Using the existing product brief, I designed feature screens and organized color, typography, and shared components.', 'I defined component types and states so engineers could understand the design intent and refer to the system during implementation.']]
        ] }
      }
    },
    {
      slug: 'portfolio-renewal', cover: '/assets/site/og-image.jpg', date: '2026-10-21',
      tags: { ja: ['Portfolio', 'Codex', 'Static Site'], ko: ['Portfolio', 'Codex', 'Static Site'], en: ['Portfolio', 'Codex', 'Static Site'] },
      content: {
        ja: { title: 'ポートフォリオサイトをリニューアルしました', summary: '作品を探しやすく、自分の強みや考え方も伝わるサイトを、企画から実装まで4日間で制作しました。', sections: [
          ['制作の背景と方針', ['以前のサイトはプロジェクトを一覧で把握しにくく、情報の更新にも手間がかかっていました。また、自分の強みや人となりを十分に伝えられていないことも課題でした。', '作品をひと目で確認でき、検索・フィルターで探せること、自分の考え方や強みも伝わることを目指しました。日本語・韓国語・英語に対応し、プロジェクト情報をデータで管理する静的サイトとして構成しました。']],
          ['制作と開発', ['Figmaでの企画・デザインに2日、Codex Workを使った開発に2日をかけました。各プロジェクトに個別URLを設け、公開にはVercelを利用しています。', 'デザインしたレイアウトや余白が実装後に異なって見えたり、意図しない要素が追加されたりしたため、変更箇所と維持する要素を具体的に伝え、画面を確認しながら調整しました。']],
          ['制作を通じて', ['約1年前に作ったサイトを改めて制作し、Codexではコードを直接編集せず自然言語で開発を進められるようになった変化を感じました。一方、クレジットの消費が早く、意図を的確に伝える効率的なプロンプトが重要だと実感しました。', '制作期間：10月18日〜21日（4日間）']]
        ] },
        ko: { title: '포트폴리오 사이트를 새로 만들었습니다', summary: '프로젝트를 쉽게 살펴보고 저의 강점과 생각도 전할 수 있는 사이트를 기획부터 구현까지 4일 동안 제작했습니다.', sections: [
          ['제작 배경과 방향', ['기존 사이트는 프로젝트를 한눈에 파악하기 어렵고 정보를 수정하기도 번거로웠습니다. 저의 강점과 어떤 사람인지 충분히 전달되지 않는 점도 과제였습니다.', '작품을 빠르게 살펴보고 검색과 필터로 찾아볼 수 있으며, 저의 생각과 강점도 전하는 사이트를 목표로 했습니다. 한·일·영을 지원하고 프로젝트 정보를 데이터로 관리하는 정적 사이트로 구성했습니다.']],
          ['제작과 개발', ['Figma로 기획과 디자인에 2일, Codex Work로 개발에 2일을 사용했습니다. 각 프로젝트에 개별 URL을 부여하고 Vercel로 배포했습니다.', '디자인한 레이아웃과 간격이 구현 후 다르게 보이거나 의도하지 않은 요소가 추가되는 일이 있었습니다. 수정할 부분과 유지할 요소를 구체적으로 전달하고 화면을 확인하며 조정했습니다.']],
          ['제작을 통해 배운 점', ['약 1년 전에 만든 사이트를 다시 제작하며 Codex를 통해 코드를 직접 편집하지 않고 자연어로 개발을 진행할 수 있게 된 변화를 느꼈습니다. 한편 크레딧이 빠르게 소모되어 의도를 정확히 전달하는 효율적인 프롬프트가 중요하다는 점도 체감했습니다.', '제작 기간: 10월 18일~21일 (4일)']]
        ] },
        en: { title: 'Renewing my portfolio website', summary: 'A four-day project to make my work easier to browse and communicate my strengths and approach.', sections: [
          ['Background and direction', ['My previous portfolio made it difficult to scan projects and cumbersome to update content. It also did not communicate enough about my strengths or how I approach design.', 'I aimed to make projects easy to browse and filter, while giving visitors a clearer sense of my work and perspective. The site supports Japanese, Korean, and English, and uses a static structure with project information managed as data.']],
          ['Making and building', ['I spent two days on planning and design in Figma, then two days developing with Codex Work. Each project has its own URL, and the site is deployed on Vercel.', 'The implemented spacing sometimes differed from the Figma design, and unintended elements occasionally appeared. I addressed this by describing what to change and what to preserve more precisely, then reviewing and refining the page.']],
          ['What I learned', ['Rebuilding a portfolio I first made about a year earlier showed me how Codex now makes it possible to develop through natural-language instructions without editing code directly. Credits can run down quickly, so I also learned to value prompts that communicate intent clearly and efficiently.', 'Production period: October 18–21 (four days)']]
        ] }
      }
    }
  ];
  window.portfolioNotes = notes;
})();
