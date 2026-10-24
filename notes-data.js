(() => {
  const notes = [
    {
      slug: 'pay-id', cover: '/notes/pay-id/images/cover.JPG', date: '2026-10-21',
      articleImages: {
        1: '/notes/pay-id/images/01.png',
        2: '/notes/pay-id/images/02.png',
        3: '/notes/pay-id/images/03.png',
        5: '/notes/pay-id/images/04.png',
      },
      tags: { ja: ['UX Research', 'Data Analysis', 'UI Design'], ko: ['UX Research', 'Data Analysis', 'UI Design'], en: ['UX Research', 'Data Analysis', 'UI Design'] },
      content: {
        ko: { title: '관심 있던 서비스의 팀에서, 검색 경험을 개선하기까지', summary: 'ReDesigner의 스카우트로 시작한 PAY ID 인턴십. 사용자 데이터로 문제를 다시 정의하고 검색 경험을 제안한 과정을 기록했다.', sections: [
          ['평소 관심 있게 사용하던 서비스', [
            '2026년 6월, ReDesigner에서 내 포트폴리오를 보고 인턴 제안을 받았다. 제안이 온 곳은 BASE의 PAY ID 팀이었다.',
            'BASE는 사용해본 적이 있었지만 PAY ID는 처음 접하는 서비스였다. 그래도 BASE에는 이미 좋은 기억이 있었다. 평소 좋아하는 밴드의 CD를 사던 The Domestic이라는 숍이 BASE를 통해 운영되고 있었기 때문이다. 일본의 온라인 쇼핑몰은 해외 주소로 배송하지 않거나 해외 발행 카드 결제를 지원하지 않는 경우가 종종 있는데, 이 숍에서는 두 가지 모두 가능했다. CD를 살 때마다 손편지로 감사 인사를 보내주고 작은 선물도 함께 넣어준 점도 기억에 남아 있었다.',
            '평소 BtoC 서비스와 이커머스, 핀테크에 관심이 있었고, 많은 사용자가 이용하는 서비스에서 실제 사용자 데이터를 바탕으로 제품을 개선하는 일도 해보고 싶었다. 약 2천만 명의 사용자를 둔 PAY ID에서라면 이런 관심을 실무와 연결할 수 있다고 생각해 제안을 반갑게 받아들였다.',
            '일본어로 일하는 것도, 장기 인턴으로 일하는 것도 처음이었다. 첫 인턴을 평소 관심 있던 서비스의 프로덕트 팀에서 하게 되어 기대가 컸다. 주어진 과제를 수행하는 데 그치지 않고, 팀이 어떤 방식으로 일하고 의사결정하는지 가까이에서 보고 실제 구성원으로 참여할 수 있다는 점도 매력적이었다.'
          ]],
          ['서비스를 직접 사용하며 시작한 첫 과제', [
            '처음 2주 동안은 PAY ID를 직접 사용해보고, 좋았던 점과 개선이 필요한 점을 정리한 리포트를 작성했다. 이후에는 발견한 개선점을 바탕으로 화면을 다시 디자인해보는 과제가 주어졌다.',
            '실무에서 Figma를 사용해본 적은 있었지만, 프로덕트의 디자인 시스템과 컴포넌트를 활용해 기존 서비스의 화면을 개선하는 UI/UX 업무는 처음이었다. 기존 디자인팀의 작업 방식과 시스템을 살펴보고, 그 맥락을 반영해 화면을 설계했다. 화면을 새로 만드는 것뿐 아니라 이미 운영 중인 제품의 규칙과 일관성을 이해하는 일이 중요하다는 점을 배웠다.'
          ]],
          ['검색 과제에서 가설을 다시 세우다', [
            '이후 2주 동안은 PAY ID의 검색 경험을 개선하는 과제를 진행했다. 처음에는 검색 결과 목록에 사용자 판단에 필요한 정보가 부족하다는 가설을 세웠다. 상품을 고르는 데 필요한 정보를 더 많이 보여주면 검색 경험이 나아질 것이라고 생각해 사용자 히어링을 진행하고 기획서와 디자인 시안을 만들었다.',
            '하지만 과제를 일주일 넘게 진행한 뒤, PdM과 이야기를 나누며 이전에도 검색 결과의 정보량을 늘리는 A/B 테스트가 있었고 수치에 유의미한 변화가 없어 해당 방향이 채택되지 않았다는 사실을 알게 됐다. 그동안 준비한 기획서와 시안을 내려놓고 문제 정의부터 다시 시작해야 했다. 일정이 빠듯해졌지만 기존 가설을 그대로 밀고 가기보다 확인된 사실을 바탕으로 방향을 다시 잡기로 했다.',
            '히어링을 통해 사용자에게는 익숙하거나 애착이 있는 숍에서 상품을 구매하는 경우가 많다는 이야기를 들었다. 이를 실제 구매 데이터와 함께 살펴보니, 팔로우하지 않은 숍보다 팔로우 중인 숍에서 구매 건수와 구매 금액이 높게 나타났다.',
            '이에 따라 검색 결과에 정보를 더하는 대신, 팔로우 중인 여러 숍에서 상품을 한 번에 검색하고 검색 결과를 팔로우한 숍으로 좁혀볼 수 있는 기능을 제안했다. 처음 세운 가설과는 다른 방향이었지만, 사용자 의견과 데이터를 함께 살펴보며 과제의 초점을 구체화할 수 있었다.',
            '짧은 기간 동안 팀원들에게 디자인 시안을 공유하고 피드백을 받아 화면을 개선했다. Codex를 활용해 제안한 화면이 실제로 구현되었을 때의 모습도 확인했다. 조사와 문제 정의부터 UI 설계와 프로토타입 구현까지 경험한 과제였다.'
          ]],
          ['높은 자유도 안에서 일하는 방법', [
            'PAY ID 팀은 직급이나 연차에 관계없이 자유롭게 의견을 나누는 분위기였다. 다양한 직군의 팀원들과 격식 없이 대화할 수 있었고, 프로덕트 디자이너가 어떻게 문제를 살피고 다른 직군과 협업하는지 가까이에서 배울 수 있었다.',
            '팀의 자율성은 인턴에게도 주어졌다. 그만큼 스스로 무엇을 해야 할지 판단해야 했고, 처음에는 업무의 방향을 잡지 못해 당황하기도 했다. 먼저 팀이 남긴 기록과 문서를 살펴보기로 했다. Notion 데이터베이스에 정리된 기존 문서를 읽으며 팀의 업무 방식과 의사결정 과정을 관찰했다.',
            '또한 팀원들에게 직접 질문했다. 업무에서 중요하게 생각하는 점, PAY ID가 집중하고 있는 문제, 회사의 일하는 방식, 실무에서 AI를 어떻게 활용하는지 등을 물으며 팀의 맥락을 알아가려 했다. 먼저 관찰하고 질문하는 과정이 주어진 자유도를 책임 있게 사용하는 방법이라는 걸 배웠다.'
          ]],
          ['다음 인턴에게도 도움이 되도록 기록하기', [
            '이전 인턴의 업무 기록이 남아 있지 않아 초반에 참고할 정보가 부족했다. 이후에 들어올 인턴은 같은 어려움을 겪지 않도록 내 업무와 배운 점을 Notion 데이터베이스에 기록하기 시작했다.',
            '매일 한 일과 진행 상황, 새롭게 배운 점과 받은 피드백, 다음에 할 일을 정리해 팀원들과 공유했다. 기록은 내 업무를 돌아보는 데 도움이 됐고 팀원들이 진행 상황을 파악하는 데도 쓰였다. 다음 인턴이 업무를 시작할 때 참고할 수 있는 자료를 남긴다는 점도 의미 있었다.'
          ]],
          ['팀의 일원으로 참여한다는 것', [
            '인턴 기간은 PAY ID 팀의 분기 목표와 성과를 들을 수 있는 시기이기도 했다. 3Q가 마무리될 때 열린 All Hands에서 팀이 어떤 목표를 세웠고, 어떤 결과를 냈으며, 제품의 어느 부분을 개선하는 데 집중했는지 들었다. 맡은 과제만 보는 것이 아니라 팀과 제품이 어떤 방향으로 움직이는지도 이해할 수 있었다.',
            '팀 빌딩을 위한 자리도 꾸준히 있었다. BASE 본사에서 회전초밥을 함께 먹으며 다른 팀 사람들과 이야기했고, Power Lunch와 인턴 환영회에서도 동료들과 식사를 나눴다. 요요기 공원에서 몰키를 하며 피크닉하고 중화요리를 먹으러 간 팀 빌딩도 기억에 남는다. 평소 업무 중에는 나누기 어려운 이야기를 하며 팀원들과 서로를 알아갈 수 있었다.',
            '인턴에게도 정사원과 비슷하게 일하기 편한 환경과 도구를 지원해줬다. MacBook Pro를 지급받아 작업했고, Codex와 Figma AI도 사용해볼 수 있었다. 인턴을 팀의 구성원으로 대하고 필요한 환경을 제공해준 점에 감사했다.'
          ]],
          ['첫 인턴을 마치며', [
            '이번 인턴십은 일본어로 일하는 첫 경험이자, 프로덕트 팀의 일원으로 실제 사용자 문제를 다룬 첫 경험이었다. 과제를 빠르게 완성하는 것만큼 팀이 이미 알고 있는 사실과 사용자의 목소리, 데이터를 살펴 문제를 제대로 정의하는 일이 중요하다는 걸 배웠다.',
            '자유도가 높은 환경에서는 누군가가 다음 할 일을 모두 정해주지 않는다. 문서와 데이터를 살펴보고, 팀원에게 질문하고, 진행 과정을 기록하며 스스로 방향을 만들어가야 했다. PAY ID 팀에서 보낸 시간은 실제 제품을 개선하는 과정과 함께, 그런 환경에서 책임 있게 일하는 방법을 익힌 시간이었다.'
          ]]
        ] },
        ja: { title: '関心のあったサービスのチームで、検索体験を改善するまで', summary: 'ReDesignerからのスカウトで始まったPAY IDのインターン。ユーザーデータをもとに課題を捉え直し、検索体験を提案するまでの過程をまとめた。', sections: [
          ['以前から使っていたサービス', [
            '2026年6月、ReDesignerからポートフォリオを見たうえでインターンのスカウトを受けた。配属先はBASEのPAY IDチームだった。',
            'BASEは利用したことがあったが、PAY IDは初めて知るサービスだった。一方で、BASEには以前から良い思い出があった。好きなバンドのCDを買っていたThe Domesticというショップが、BASEを通じて運営されていたからだ。日本の通販サイトでは海外住所への配送や海外発行カードでの決済に対応していないことも多いが、このショップではどちらも利用できた。CDを買うたびに手書きのお礼の手紙や小さなおまけを添えてくれたことも印象に残っている。',
            '以前からBtoCサービスやEC、フィンテックに関心があり、多くのユーザーが使うサービスを実際のデータから改善する仕事にも携わりたいと考えていた。約2,000万人が利用するPAY IDなら、そうした関心を実務につなげられると思い、スカウトをうれしく受け止めた。',
            '日本語で働くことも、長期インターンも初めてだった。以前から関心のあったサービスのプロダクトチームで初めてのインターンを経験できることに期待していた。与えられた課題に取り組むだけでなく、チームの仕事の進め方や意思決定を近くで見て、メンバーの一人として参加できる点にも魅力を感じた。'
          ]],
          ['サービスを使うことから始まった最初の課題', [
            '最初の2週間はPAY IDを実際に使い、良かった点や改善できそうな点をまとめたレポートを作成した。その後、見つけた改善点をもとに画面を再デザインする課題に取り組んだ。',
            '実務でFigmaを使った経験はあったが、プロダクトのデザインシステムやコンポーネントを活用して既存サービスを改善するUI/UX業務は初めてだった。既存のデザインチームの進め方やシステムを確認し、その背景を踏まえて画面を設計した。新しい画面を作るだけでなく、すでに運用されているプロダクトのルールや一貫性を理解することが大切だと学んだ。'
          ]],
          ['検索課題で仮説を立て直す', [
            '続く2週間はPAY IDの検索体験を改善する課題に取り組んだ。最初は、検索結果一覧にユーザーが判断するための情報が足りないのではないかと考えた。商品選びに必要な情報を増やせば検索体験が良くなると仮説を立て、ユーザーヒアリングを行い、企画書とデザイン案を作成した。',
            'しかし、1週間以上作業を進めた後、PdMとの会話で、以前にも検索結果の情報量を増やすA/Bテストを実施したものの、数値に有意な変化がなく採用されなかったと知った。それまで準備してきた企画書とデザイン案をいったん取り下げ、課題設定からやり直す必要があった。スケジュールは厳しくなったが、最初の仮説に固執せず、確認できた事実をもとに方向を見直すことにした。',
            'ヒアリングでは、ユーザーが親しみや愛着を感じているショップで商品を購入することが多いと聞いた。実際の購買データも確認すると、フォローしていないショップより、フォロー中のショップで購入件数と購入金額が高かった。',
            'そこで検索結果の情報を増やすのではなく、フォロー中の複数のショップをまとめて検索し、結果をフォロー中のショップに絞り込める機能を提案した。最初の仮説とは異なる方向だったが、ユーザーの声とデータを合わせて見ることで、課題の焦点を具体化できた。',
            '短い期間ではあったが、チームメンバーにデザイン案を共有してフィードバックを受け、画面を改善した。Codexを使って、提案した画面を実装した場合の見え方も確認した。調査や課題設定からUI設計、プロトタイプの実装までを経験した課題だった。'
          ]],
          ['自由度の高いチームで働く', [
            'PAY IDチームは、役職や経験年数に関係なく自由に意見を交わせる雰囲気だった。さまざまな職種のメンバーと気兼ねなく話せる環境で、プロダクトデザイナーがどのように課題を捉え、他職種と連携するのかを近くで学べた。',
            'インターンにも大きな裁量があった。その分、自分で何をすべきか判断する必要があり、最初は仕事の進め方が分からず戸惑うこともあった。まずはチームに残されている記録や資料を読むことにした。Notionのデータベースにある過去のドキュメントを参考に、チームの仕事の進め方や意思決定の過程を観察した。',
            'また、チームメンバーにも自分から質問した。仕事で大切にしていること、PAY IDが注力している課題、会社の文化、実務でのAIの活用方法などを聞き、チームの背景を理解しようとした。待つだけでなく、自分から観察し質問することが、与えられた裁量に責任を持つ方法だと学んだ。'
          ]],
          ['次のインターンに役立つ記録を残す', [
            '以前のインターンの業務記録が残っておらず、始めたばかりの頃は参考にできる情報が少なかった。次に来るインターンが同じように困らないよう、自分の業務や学んだことをNotionのデータベースに記録し始めた。',
            '毎日の作業や進捗、学んだことや受けたフィードバック、次に取り組むことをまとめ、チームメンバーと共有した。記録は自分の業務を振り返る助けになり、チームが進捗を把握するためにも役立った。次のインターンが仕事を始めるときに参考にできる情報を残せたことにも意味があった。'
          ]],
          ['チームの一員として参加する', [
            'インターン期間中には、PAY IDチームの四半期目標や成果を聞く機会もあった。3Qの終了時に開かれたAll Handsでは、チームがどのような目標を掲げ、どんな成果を上げ、プロダクトのどこを重点的に改善したのかを知ることができた。担当課題だけでなく、チームやプロダクト全体の方向性も理解できた。',
            'チームビルディングの機会も定期的にあった。BASE本社に回転寿司が来て、他のチームのメンバーと一緒に食事をしながら話した。Power Lunchやインターン歓迎会でも、同僚と食事を囲んだ。代々木公園でモルックをしてピクニックを楽しみ、中華料理を食べに行ったチームビルディングも印象に残っている。普段の業務中には話しにくいことも共有でき、チームメンバーをより深く知る機会になった。',
            'インターンにも正社員と同じように快適に働ける環境やツールを用意してくれた。MacBook Proを支給され、CodexやFigma AIも試すことができた。インターンをチームの一員として迎え、必要な環境を整えてくれたことに感謝している。'
          ]],
          ['初めてのインターンを終えて', [
            '今回のインターンは、日本語で働く初めての経験であり、プロダクトチームの一員として実際のユーザー課題に取り組む初めての経験でもあった。課題を早く形にすることと同じくらい、チームがすでに把握していることやユーザーの声、データを確認し、課題を正しく定義することが大切だと学んだ。',
            '裁量の大きい環境では、次にやることを誰かがすべて決めてくれるわけではない。資料やデータを確認し、チームメンバーに質問し、進捗を記録しながら、自分で仕事の方向を作っていく必要があった。PAY IDチームで過ごした時間は、実際のプロダクトを改善する経験とともに、そのような環境で責任を持って働く方法を学ぶ時間だった。'
          ]]
        ] },
        en: { title: 'Improving search at a service I already cared about', summary: 'A scouting message from ReDesigner led to my internship with PAY ID. I documented how I reframed a problem with user data and proposed a new search experience.', sections: [
          ['A service I already knew', [
            'In June 2026, ReDesigner reached out after reviewing my portfolio and invited me to interview for an internship. The opportunity was with BASE’s PAY ID team.',
            'I had used BASE before, but PAY ID was new to me. BASE had already left a good impression, though. I used to buy CDs by bands I liked from a shop called The Domestic, which runs on BASE. Many Japanese online shops do not ship to overseas addresses or accept cards issued abroad, but this shop supported both. The handwritten thank-you notes included with each CD order, along with small gifts, also stayed with me.',
            'I had long been interested in B2C products, e-commerce, and fintech. I also wanted to work on improving a product using real user data at a scale where those changes could matter to many people. PAY ID had around 20 million users, so I saw a chance to connect those interests with practical product work and was glad to accept the offer.',
            'It was my first time working in Japanese and my first long-term internship. I was excited to join the product team of a service I already cared about. I was also drawn to the chance to see how the team worked and made decisions, and to take part as a member rather than only complete an assigned task.'
          ]],
          ['Starting by using the product', [
            'During the first two weeks, I used PAY ID and wrote a report on what worked well and what could be improved. I then redesigned screens based on the opportunities I had identified.',
            'I had used Figma in practical settings, but this was my first UI/UX assignment improving an existing service with its design system and components. I studied the design team’s ways of working and its system before designing within that context. I learned that improving a live product involves understanding its established rules and consistency, not just creating a new screen.'
          ]],
          ['Reframing the search problem', [
            'For the next two weeks, I worked on improving search in PAY ID. My initial hypothesis was that search results did not provide enough information for users to make a decision. I thought adding more product information could improve the experience, so I conducted user interviews and prepared a brief and design concepts.',
            'After more than a week of work, a conversation with the PdM revealed that the team had previously tested adding more information to search results. The A/B test had not produced a meaningful change in the metrics, so the proposal was not adopted. I had to set aside the brief and designs I had prepared and return to the problem definition. The schedule became tight, but I decided to revisit the direction based on what the team had already learned rather than continue with my first hypothesis.',
            'In interviews, I heard that people often bought from shops they already knew or felt attached to. I checked this against purchase data and found that the number and value of purchases were higher for shops users followed than for shops they did not follow.',
            'Instead of adding information to each result, I proposed letting users search across multiple followed shops and filter the results to those shops. It was a different direction from my initial hypothesis, but combining user feedback with the data helped me define the problem more concretely.',
            'Although the time was short, I shared design concepts with teammates, incorporated their feedback, and refined the screens. I also used Codex to see how the proposed screens might look when implemented. The assignment gave me a chance to work through research, problem framing, UI design, and prototyping.'
          ]],
          ['Working with a high degree of autonomy', [
            'The PAY ID team had an open culture where people could share ideas regardless of title or tenure. I could speak comfortably with people in different roles and observe how product designers investigated problems and collaborated with other disciplines.',
            'Interns were also given a high degree of autonomy. That meant I had to decide what to do, and at first I was unsure how to find my direction. I started by reviewing the team’s records and documents. Reading the materials in its Notion databases helped me understand how the team worked and made decisions.',
            'I also asked teammates directly about what they valued in their work, the problems PAY ID was focused on, the company’s culture, and how they used AI in practice. I learned that taking initiative to observe and ask questions was one way to use that autonomy responsibly.'
          ]],
          ['Keeping notes for the next intern', [
            'There were few records from previous interns, so I had limited material to refer to when I started. To make the transition easier for the next person, I began documenting my work and what I learned in a Notion database.',
            'I recorded what I had worked on, progress, new learnings and feedback, and what I planned to do next, then shared it with the team. These notes helped me reflect on my work and helped teammates follow its progress. It also felt useful to leave behind a reference for the next intern.'
          ]],
          ['Taking part as a member of the team', [
            'My internship coincided with the end of PAY ID’s third quarter. At an All Hands meeting, I learned about the team’s goals, results, and the product improvements it had prioritized. It helped me understand the direction of the wider team and product, beyond the assignment I was working on.',
            'The team also made time to connect. A conveyor-belt sushi setup came to BASE’s office, giving people from different teams a chance to eat together and talk. There were Power Lunches and welcome gatherings for interns, too. I remember a team-building day with a picnic and Mölkky at Yoyogi Park, followed by Chinese food. These occasions made it easier to have conversations that rarely came up during day-to-day work and get to know teammates better.',
            'The team also provided interns with tools and a work environment comparable to those available to full-time employees. I received a MacBook Pro and had the chance to try Codex and Figma AI. I appreciated being welcomed as a member of the team and given the tools to work comfortably.'
          ]],
          ['Looking back on my first internship', [
            'This was my first experience working in Japanese and my first time addressing real user problems as part of a product team. I learned that moving quickly matters, but so does defining the problem carefully by looking at what the team already knows, listening to users, and examining the data.',
            'In a high-autonomy environment, no one lays out every next step for you. I had to review documents and data, ask teammates questions, and keep track of my work to find a direction. My time with PAY ID taught me both how product improvements take shape and how to work responsibly in an environment with that level of autonomy.'
          ]]
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
      slug: 'portfolio-renewal', cover: '/notes/portfolio-renewal/images/cover.jpg', date: '2026-10-21',
      articleImages: {
        0: '/notes/portfolio-renewal/images/01.jpg',
        1: '/notes/portfolio-renewal/images/02.jpg',
        2: '/notes/portfolio-renewal/images/03.jpg',
        3: '/notes/portfolio-renewal/images/04.jpg',
        4: '/notes/portfolio-renewal/images/05.jpg',
      },
      tags: { ja: ['Portfolio', 'Codex', 'Static Site'], ko: ['Portfolio', 'Codex', 'Static Site'], en: ['Portfolio', 'Codex', 'Static Site'] },
      content: {
        ja: { title: 'ポートフォリオサイトをリニューアルしました', summary: '作品を探しやすく、自分の強みや考え方も伝わるサイトを、企画から実装まで4日間で制作しました。', sections: [
          ['制作の背景と方針', ['以前のサイトはプロジェクトを一覧で把握しにくく、情報の更新にも手間がかかっていました。また、自分の強みや人となりを十分に伝えられていないことも課題でした。', '作品をひと目で確認でき、検索・フィルターで探せること、自分の考え方や強みも伝わることを目指しました。日本語・韓国語・英語に対応し、プロジェクト情報をデータで管理する静的サイトとして構成しました。']],
          ['制作と開発', ['Figmaでの企画・デザインに2日、Codex Workを使った開発に2日をかけました。各プロジェクトに個別URLを設け、公開にはVercelを利用しています。', 'デザインしたレイアウトや余白が実装後に異なって見えたり、意図しない要素が追加されたりしたため、変更箇所と維持する要素を具体的に伝え、画面を確認しながら調整しました。']],
          ['プロジェクトを探す・管理する', ['メインページではプロジェクトを一覧でき、カテゴリーフィルターで表示を絞り込めます。検索パネルではキーワードやタグから探せるほか、サムネイルとタイトルを見ながら結果を確認できます。各プロジェクトには個別の詳細ページとURLを用意し、詳細ページの下部からは横スクロールで別のプロジェクトも見られるようにしました。', 'プロジェクト情報はデータとしてまとめ、画像はプロジェクトごとのフォルダでカバー、アプリアイコン、ギャラリーに分けて管理しています。共通のページ構成を使うことで、掲載内容を追加・更新しやすくしました。']],
          ['Notesと多言語対応', ['制作の過程や考えたことを残せるNotesも追加しました。メインページには記事を一部掲載し、一覧ページからすべての記事を探せます。記事ごとに詳細ページとURLを設け、カバー画像や本文中の画像も掲載できる構成です。', '言語を切り替えると、プロジェクトやNotesのタイトル・説明・本文も日本語、韓国語、英語に切り替わります。ページの構成を共通にしながら、言語ごとのコンテンツを管理できるようにしました。']],
          ['制作を通じて', ['約1年前に作ったサイトを改めて制作し、Codexではコードを直接編集せず自然言語で開発を進められるようになった変化を感じました。一方、クレジットの消費が早く、意図を的確に伝える効率的なプロンプトが重要だと実感しました。']]
        ] },
        ko: { title: '포트폴리오 사이트를 새로 만들었습니다', summary: '프로젝트를 쉽게 살펴보고 저의 강점과 생각도 전할 수 있는 사이트를 기획부터 구현까지 4일 동안 제작했습니다.', sections: [
          ['제작 배경과 방향', ['기존 사이트는 프로젝트를 한눈에 파악하기 어렵고 정보를 수정하기도 번거로웠습니다. 저의 강점과 어떤 사람인지 충분히 전달되지 않는 점도 과제였습니다.', '작품을 빠르게 살펴보고 검색과 필터로 찾아볼 수 있으며, 저의 생각과 강점도 전하는 사이트를 목표로 했습니다. 한·일·영을 지원하고 프로젝트 정보를 데이터로 관리하는 정적 사이트로 구성했습니다.']],
          ['제작과 개발', ['Figma로 기획과 디자인에 2일, Codex Work로 개발에 2일을 사용했습니다. 각 프로젝트에 개별 URL을 부여하고 Vercel로 배포했습니다.', '디자인한 레이아웃과 간격이 구현 후 다르게 보이거나 의도하지 않은 요소가 추가되는 일이 있었습니다. 수정할 부분과 유지할 요소를 구체적으로 전달하고 화면을 확인하며 조정했습니다.']],
          ['프로젝트 탐색과 관리', ['메인 페이지에서는 프로젝트를 한눈에 보고, 카테고리 필터로 원하는 작업만 모아볼 수 있습니다. 검색 패널에서는 키워드와 태그로 프로젝트를 찾고, 썸네일과 제목을 확인하며 결과를 살펴볼 수 있습니다. 프로젝트마다 상세 페이지와 고유 URL을 제공하며, 상세 페이지 아래에서는 가로 스크롤로 다른 프로젝트도 둘러볼 수 있습니다.', '프로젝트 정보는 데이터로 모아 관리하고, 이미지는 프로젝트별 폴더에서 커버·앱 아이콘·갤러리로 나눴습니다. 공통 페이지 구조를 사용해 새 프로젝트를 추가하거나 기존 정보를 수정하기 쉽게 했습니다.']],
          ['Notes와 다국어 지원', ['작업 과정과 고민을 기록하는 Notes도 추가했습니다. 메인 페이지에서 일부 글을 소개하고, 전체 목록 페이지에서 모든 글을 찾아볼 수 있습니다. 각 글에는 상세 페이지와 고유 URL이 있으며, 커버 이미지와 본문 이미지를 함께 보여줍니다.', '언어를 바꾸면 프로젝트와 Notes의 제목, 설명, 본문도 일본어·한국어·영어로 전환됩니다. 페이지 구조는 유지하면서 언어별 콘텐츠를 관리할 수 있도록 구성했습니다.']],
          ['제작을 통해 배운 점', ['약 1년 전에 만든 사이트를 다시 제작하며 Codex를 통해 코드를 직접 편집하지 않고 자연어로 개발을 진행할 수 있게 된 변화를 느꼈습니다. 한편 크레딧이 빠르게 소모되어 의도를 정확히 전달하는 효율적인 프롬프트가 중요하다는 점도 체감했습니다.']]
        ] },
        en: { title: 'Renewing my portfolio website', summary: 'A four-day project to make my work easier to browse and communicate my strengths and approach.', sections: [
          ['Background and direction', ['My previous portfolio made it difficult to scan projects and cumbersome to update content. It also did not communicate enough about my strengths or how I approach design.', 'I aimed to make projects easy to browse and filter, while giving visitors a clearer sense of my work and perspective. The site supports Japanese, Korean, and English, and uses a static structure with project information managed as data.']],
          ['Making and building', ['I spent two days on planning and design in Figma, then two days developing with Codex Work. Each project has its own URL, and the site is deployed on Vercel.', 'The implemented spacing sometimes differed from the Figma design, and unintended elements occasionally appeared. I addressed this by describing what to change and what to preserve more precisely, then reviewing and refining the page.']],
          ['Finding and managing projects', ['The homepage presents projects in a browsable list, with category filters to narrow what is shown. The search panel supports keyword and tag searches, and displays thumbnails and titles alongside the results. Each project has a dedicated detail page and URL; a horizontal More Project section lets visitors continue exploring from there.', 'Project details are managed as data. Images are organized in project-specific folders for covers, app icons, and galleries. Reusing a shared page structure makes it easier to add a project or update its content.']],
          ['Notes and languages', ['I added Notes to document the process and thinking behind my work. The homepage features selected posts, while a separate index lists all articles. Each post has its own detail page and URL, with a cover image and images within the article.', 'Switching languages also changes project and Notes titles, descriptions, and article text between Japanese, Korean, and English. The shared page structure keeps the experience consistent while allowing the content to be managed in each language.']],
          ['What I learned', ['Rebuilding a portfolio I first made about a year earlier showed me how Codex now makes it possible to develop through natural-language instructions without editing code directly. Credits can run down quickly, so I also learned to value prompts that communicate intent clearly and efficiently.']]
        ] }
      }
    }
  ];
  window.portfolioNotes = notes;
})();
