const tarotCards = [
    {
        name: "0. The Fool",
        image: "images/0바보카드.jpg",
        meaning: "새로운 시작, 자유, 순수함"
    },
    {
        name: "1. The Magician",
        image: "images/1마법사카드.jpg",
        meaning: "의지, 창조력, 자원 활용"
    },
    {
        name: "2. The High Priestess",
        image: "images/2여사제카드.jpg",
        meaning: "직관, 무의식, 여성성"
    },
    {
        name: "3. The Empress",
        image: "images/3여황제카드.jpg",
        meaning: "풍요, 모성, 창조성"
    },
    {
        name: "4. The Emperor",
        image: "images/4황제카드.jpg",
        meaning: "권위, 안정, 리더십"
    },
    {
        name: "5. The Hierophant",
        image: "images/5교황카드.jpg",
        meaning: "전통, 도덕, 조언"
    },
    {
        name: "6. The Lovers",
        image: "images/6연인카드.jpg",
        meaning: "사랑, 관계, 조화"
    },
    {
        name: "7. The Chariot",
        image: "images/7전차카드.jpg",
        meaning: "승리, 추진력, 통제"
    },
    {
        name: "8. Strength",
        image: "images/8힘카드.jpg",
        meaning: "용기, 인내, 내면의 힘"
    },
    {
        name: "9. The Hermit",
        image: "images/9은둔자카드.jpg",
        meaning: "고독, 탐색, 지혜"
    },
    {
        name: "10. Wheel of Fortune",
        image: "images/10운명의수레바퀴.jpg",
        meaning: "변화, 운명, 흐름"
    },
    {
        name: "11. Justice",
        image: "images/11정의카드.jpg",
        meaning: "공정함, 진실, 책임"
    },
    {
        name: "12. The Hanged Man",
        image: "images/12행맨카드.jpg",
        meaning: "희생, 새로운 시각, 인내"
    },
    {
        name: "13. Death",
        image: "images/13죽음카드.jpg",
        meaning: "종말, 변화, 재생"
    },
    {
        name: "14. Temperance",
        image: "images/14절제카드.jpg",
        meaning: "조화, 균형, 절제"
    },
    {
        name: "15. The Devil",
        image: "images/15악마카드.jpg",
        meaning: "유혹, 집착, 속박"
    },
    {
        name: "16. The Tower",
        image: "images/16타워카드.jpg",
        meaning: "충격, 붕괴, 급변"
    },
    {
        name: "17. The Star",
        image: "images/17별카드.jpg",
        meaning: "희망, 치유, 평화"
    },
    {
        name: "18. The Moon",
        image: "images/18달카드.jpg",
        meaning: "불확실성, 직관, 환상"
    },
    {
        name: "19. The Sun",
        image: "images/19태양카드.jpg",
        meaning: "행복, 성공, 명료함"
    },
    {
        name: "20. Judgment",
        image: "images/20심판카드.jpg",
        meaning: "부활, 자기 성찰, 용서"
    },
    // 마이너 아르카나 - 완드 (Wands)
    {
        name: "Ace of Wands",
        image: "images/완드에이스.jpg",
        meaning: "영감, 새로운 시작, 창의적 에너지"
    },
    {
        name: "Two of Wands",
        image: "images/2완드.jpg",
        meaning: "계획, 선택, 미래에 대한 비전"
    },
    {
        name: "Three of Wands",
        image: "images/3완드.jpg",
        meaning: "확장, 진척, 준비된 행동"
    },
    {
        name: "Four of Wands",
        image: "images/4완드.jpg",
        meaning: "축하, 안정, 공동체"
    },
    {
        name: "Five of Wands",
        image: "images/5완드.jpg",
        meaning: "경쟁, 갈등, 마찰"
    },
    {
        name: "Six of Wands",
        image: "images/6완드.jpg",
        meaning: "승리, 인정, 진보"
    },
    {
        name: "Seven of Wands",
        image: "images/7완드.jpg",
        meaning: "방어, 입장 고수, 도전"
    },
    {
        name: "Eight of Wands",
        image: "images/8완드.jpg",
        meaning: "빠른 진행, 소통, 기회"
    },
    {
        name: "Nine of Wands",
        image: "images/9완드.jpg",
        meaning: "지속, 회복력, 방어 태세"
    },
    {
        name: "Ten of Wands",
        image: "images/10완드.jpg",
        meaning: "과중한 책임, 부담, 압박감"
    },
    {
        name: "Page of Wands",
        image: "images/완드페이지.jpg",
        meaning: "모험, 창의성, 탐색"
    },
    {
        name: "Knight of Wands",
        image: "images/완드나이트.jpg",
        meaning: "열정, 추진력, 충동"
    },
    {
        name: "Queen of Wands",
        image: "images/완드퀸.jpg",
        meaning: "자신감, 카리스마, 따뜻함"
    },
    {
        name: "King of Wands",
        image: "images/완드킹.jpg",    
        meaning: "카리스마, 비전, 영향력"
    },
    // 마이너 아르카나 - 컵 (Cups)
    {
        name: "Ace of Cups",
        image: "images/컵에이스.jpg",
        meaning: "사랑의 시작, 감정적 풍요, 열린 마음"
    },
    {
        name: "Two of Cups",
        image: "images/2컵.jpg",
        meaning: "연결, 파트너십, 조화"
    },
    {
        name: "Three of Cups",
        image: "images/3컵.jpg",
        meaning: "우정, 축하, 커뮤니티"
    },
    {
        name: "Four of Cups",
        image: "images/4컵.jpg",
        meaning: "무관심, 지루함, 내면 집중"
    },
    {
        name: "Five of Cups",
        image: "images/5컵.jpg",
        meaning: "상실, 슬픔, 후회"
    },
    {
        name: "Six of Cups",
        image: "images/6컵.jpg",
        meaning: "향수, 어린 시절, 순수함"
    },
    {
        name: "Seven of Cups",
        image: "images/7컵.jpg",
        meaning: "환상, 선택, 망설임"
    },
    {
        name: "Eight of Cups",
        image: "images/8컵.jpg",
        meaning: "이별, 변화, 더 나은 것을 향한 여정"
    },
    {
        name: "Nine of Cups",
        image: "images/9컵.jpg",
        meaning: "감정적 만족, 성취, 기쁨"
    },
    {
        name: "Ten of Cups",
        image: "images/10컵.jpg",
        meaning: "가족, 행복, 감정의 완성"
    },
    {
        name: "Page of Cups",
        image: "images/컵페이지.jpg",
        meaning: "상상력, 순수한 감정, 새로운 가능성"
    },
    {
        name: "Knight of Cups",
        image: "images/컵나이트.jpg",
        meaning: "로맨스, 매력, 감성적인 접근"
    },
    {
        name: "Queen of Cups",
        image: "images/컵퀸.jpg",
        meaning: "공감, 직관, 감정적 통찰력"
    },
    {
        name: "King of Cups",
        image: "images/컵킹.jpg",
        meaning: "감정 조절, 성숙함, 연민"
    },
    // 마이너 아르카나 - 소드 (Swords)
    {
        name: "Ace of Swords",
        image: "images/소드에이스.jpg",
        meaning: "명확성, 진실, 새로운 사고의 시작"
    },
    {
        name: "Two of Swords",
        image: "images/2소드.jpg",
        meaning: "결정 회피, 균형, 교착 상태"
    },
    {
        name: "Three of Swords",
        image: "images/3소드.jpg",
        meaning: "상실, 슬픔, 마음의 상처"
    },
    {
        name: "Four of Swords",
        image: "images/4소드.jpg",
        meaning: "휴식, 회복, 내면 성찰"
    },
    {
        name: "Five of Swords",
        image: "images/5소드.jpg",
        meaning: "갈등, 패배, 이기심"
    },
    {
        name: "Six of Swords",
        image: "images/6소드.jpg",
        meaning: "이동, 회복, 더 나은 곳으로 향함"
    },
    {
        name: "Seven of Swords",
        image: "images/7소드.jpg",
        meaning: "속임수, 전략, 혼자 해결하려는 태도"
    },
    {
        name: "Eight of Swords",
        image: "images/8소드.jpg",
        meaning: "속박, 무기력, 정신적 제한"
    },
    {
        name: "Nine of Swords",
        image: "images/9소드.jpg",
        meaning: "불면, 걱정, 죄책감"
    },
    {
        name: "Ten of Swords",
        image: "images/소드9.jpg",
        meaning: "종말, 배신, 고통"
    },
    {
        name: "Page of Swords",
        image: "images/소드페이지.jpg",
        meaning: "호기심, 신중함, 날카로운 사고"
    },
    {
        name: "Knight of Swords",
        image: "images/소드나이트.jpg",
        meaning: "급진적 추진력, 결단, 목표 집중"
    },
    {
        name: "Queen of Swords",
        image: "images/소드퀸.jpg",
        meaning: "이성, 독립, 직설적 진실"
    },
    {
        name: "King of Swords",
        image: "images/소드킹.jpg",
        meaning: "지혜, 권위, 논리"
    },
    //마이너 아르카나 - 팬타클 (Pentacles)
    {
        name: "Ace of Pentacles",
        image: "images/펜타클에이스.jpg",
        meaning: "새로운 기회, 번영, 현실적 시작"
    },
    {
        name: "Two of Pentacles",
        image: "images/2펜타클.jpg",
        meaning: "균형, 적응, 시간 관리"
    },
    {
        name: "Three of Pentacles",
        image: "images/3펜타클.jpg",
        meaning: "협력, 기술, 공동 작업"
    },
    {
        name: "Four of Pentacles",
        image: "images/4펜타클.jpg",
        meaning: "소유욕, 안정성, 방어적 태도"
    },
    {
        name: "Five of Pentacles",
        image: "images/5펜타클.jpg",
        meaning: "결핍, 고립, 재정적 어려움"
    },
    {
        name: "Six of Pentacles",
        image: "images/6펜타클.jpg",
        meaning: "나눔, 균형, 도움 받기"
    },
    {
        name: "Seven of Pentacles",
        image: "images/7펜타클.jpg",
        meaning: "인내, 재검토, 기다림"
    },
    {
        name: "Eight of Pentacles",
        image: "images/8펜타클.jpg",
        meaning: "기술 연마, 노력, 헌신"
    },
    {
        name: "Nine of Pentacles",
        image: "images/9펜타클.jpg",
        meaning: "자립, 풍요, 만족"
    },
    {
        name: "Ten of Pentacles",
        image: "images/10펜타클.jpg",
        meaning: "가족, 유산, 장기적 안정"
    },
    {
        name: "Page of Pentacles",
        image: "images/펜타클페이지.jpg",
        meaning: "학습, 기초, 실용적 기회"
    },
    {
        name: "Knight of Pentacles",
        image: "images/펜타클나이트.jpg",
        meaning: "성실함, 신중함, 꾸준함"
    },
    {
        name: "Queen of Pentacles",
        image: "images/펜타클퀸.jpg",
        meaning: "현실적 배려, 풍요, 가정적 안정"
    },
    {
        name: "King of Pentacles",
        image: "images/펜타클킹.jpg",
        meaning: "재정적 성공, 신뢰성, 권위"
    }, 
];
 

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    const img = document.getElementById("cardImage");
    const meaning = document.getElementById("meaning");

    button.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        const card = tarotCards[randomIndex];

        img.src = card.image;
        img.alt = card.name;
        meaning.innerHTML = `<h2>${card.name}</h2><p>${card.meaning}</p>`;
    });
});
