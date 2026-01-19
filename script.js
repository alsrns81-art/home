// Embedded math.ttl content to avoid CORS issues with local file fetching
const rawTtlData = `
@prefix ex: <http://example.org/math/edu/> .
@prefix cur: <http://example.org/curriculum/2022/> .
@prefix schema: <http://schema.org/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

### (1) 수와 연산 영역 (Number and Operations) ###
ex:Standard_9su01_01_02 
    rdf:type cur:AchievementStandard ;
    cur:code "9수01-01", "9수01-02" ;
    cur:keyword "소인수분해", "최대공약수", "최소공배수", "소수", "합성수" ;
    cur:content "소인수분해의 뜻과 성질을 이해하고 최대공약수와 최소공배수 구하기"[cite: 4, 5];
    schema:educationalResource <https://www.youtube.com/results?search_query=중학수학+소인수분해+최대공약수> .

ex:Standard_9su01_03_05
    rdf:type cur:AchievementStandard ;
    cur:code "9수01-03", "9수01-04", "9수01-05" ;
    cur:keyword "정수", "유리수", "음수", "절댓값", "사칙계산" ;
    cur:content "정수와 유리수의 개념 이해 및 사칙계산 원리 학습"[cite: 7, 10];
    cur:pedagogicalNote "실생활 모델을 활용한 직관적 이해 강조"[cite: 21];
    schema:educationalResource <https://www.youtube.com/results?search_query=정수와+유리수+계산+원리> .

ex:Standard_9su01_06_10
    rdf:type cur:AchievementStandard ;
    cur:code "9수01-06", "9수01-07", "9수01-08", "9수01-10" ;
    cur:keyword "순환소수", "제곱근", "무리수", "실수", "유리화" ;
    cur:content "유리수와 순환소수의 관계, 제곱근의 성질과 실수의 사칙계산"[cite: 12, 14, 17];
    schema:educationalResource <https://www.youtube.com/results?search_query=제곱근과+실수+무리수의+개념> .

### (2) 변화와 관계 영역 (Change and Relationships) ###
ex:Standard_9su02_01_04
    rdf:type cur:AchievementStandard ;
    cur:code "9수02-01", "9수02-02", "9수02-03", "9수02-04" ;
    cur:keyword "문자와식", "일차식", "방정식", "등식의성질", "일차방정식" ;
    cur:content "문자의 사용, 일차식의 계산 및 일차방정식의 풀이와 활용"[cite: 36, 37, 40];
    schema:educationalResource <https://www.youtube.com/results?search_query=중학수학+일차방정식+풀이> .

ex:Standard_9su02_05_07
    rdf:type cur:AchievementStandard ;
    cur:code "9수02-05", "9수02-06", "9수02-07" ;
    cur:keyword "순서쌍", "좌표평면", "그래프", "정비례", "반비례" ;
    cur:content "좌표와 그래프의 해석, 정비례와 반비례 관계 이해"[cite: 42, 43, 44];
    cur:pedagogicalNote "다양한 상황을 그래프로 나타내어 변화 상태 파악"[cite: 71];
    schema:educationalResource <https://www.youtube.com/results?search_query=좌표평면과+그래프+정비례+반비례> .

ex:Standard_9su02_14_18
    rdf:type cur:AchievementStandard ;
    cur:code "9수02-14", "9수02-15", "9수02-16", "9수02-17", "9수02-18" ;
    cur:keyword "함수", "일차함수", "기울기", "절편", "연립방정식" ;
    cur:content "함수의 개념, 일차함수의 그래프 성질 및 일차방정식과의 관계"[cite: 56, 57, 60];
    schema:educationalResource <https://www.youtube.com/results?search_query=일차함수와+일차방정식의+관계> .

ex:Standard_9su02_19_22
    rdf:type cur:AchievementStandard ;
    cur:code "9수02-19", "9수02-20", "9수02-21", "9수02-22" ;
    cur:keyword "인수분해", "이차방정식", "이차함수", "포물선" ;
    cur:content "다항식의 곱셈과 인수분해, 이차방정식 및 이차함수의 성질"[cite: 63, 65, 68];
    cur:pedagogicalNote "이차함수 최댓값/최솟값은 실수 전체 범위에서만 다룸"[cite: 84];
    schema:educationalResource <https://www.youtube.com/results?search_query=이차방정식+풀이와+이차함수+그래프> .

### (3) 도형과 측정 영역 (Geometry and Measurement) ###
ex:Standard_9su03_01_11
    rdf:type cur:AchievementStandard ;
    cur:code "9수03-01", "9수03-04", "9수03-05", "9수03-08", "9수03-10" ;
    cur:keyword "평행선", "합동", "부채꼴", "다면체", "외심", "내심" ;
    cur:content "기본 도형의 성질, 삼각형의 합동, 입체도형의 겉넓이와 부피"[cite: 106, 110, 117, 120];
    schema:educationalResource <https://www.youtube.com/results?search_query=삼각형의+외심과+내심+입체도형+부피> .

ex:Standard_9su03_12_19
    rdf:type cur:AchievementStandard ;
    cur:code "9수03-12", "9수03-15", "9수03-16", "9수03-18" ;
    cur:keyword "닮음", "피타고라스", "삼각비", "원주각" ;
    cur:content "도형의 닮음, 피타고라스 정리, 삼각비의 뜻과 원의 성질"[cite: 123, 128, 130, 134];
    cur:pedagogicalNote "삼각비는 0도에서 90도까지만 다룸"[cite: 159];
    schema:educationalResource <https://www.youtube.com/results?search_query=피타고라스+정리와+삼각비+기초> .

### (4) 자료와 가능성 영역 (Data and Uncertainty) ###
ex:Standard_9su04_01_04
    rdf:type cur:AchievementStandard ;
    cur:code "9수04-01", "9수04-02", "9수04-03", "9수04-04" ;
    cur:keyword "대푯값", "중앙값", "히스토그램", "상대도수", "통계적탐구" ;
    cur:content "자료의 정리와 해석, 대푯값의 선택 및 통계적 문제 해결"[cite: 167, 169, 171];
    schema:educationalResource <https://www.youtube.com/results?search_query=중학교+통계+대푯값과+상대도수> .

ex:Standard_9su04_05_09
    rdf:type cur:AchievementStandard ;
    cur:code "9수04-05", "9수04-06", "9수04-07", "9수04-08", "9수04-09" ;
    cur:keyword "경우의수", "확률", "분산", "표준편차", "상자그림", "산점도" ;
    cur:content "확률의 기본 성질, 산포도(분산/표준편차), 상자그림과 상관관계"[cite: 174, 176, 178];
    cur:pedagogicalNote "공학 도구를 이용하여 상자그림을 나타내고 분포 비교"[cite: 178];
    schema:educationalResource <https://www.youtube.com/results?search_query=확률과+산포도+상자그림+산점도> .
`;

function parseTTL(ttl) {
    const standards = [];
    const chunks = ttl.split('ex:Standard_');

    // Skip the first chunk (prefixes)
    for (let i = 1; i < chunks.length; i++) {
        const chunk = chunks[i];
        const lines = chunk.split('\n');

        let codes = [];
        let keywords = [];
        let content = "";
        let resource = "";

        // Simple line-by-line parsing
        for (const line of lines) {
            const trimmed = line.trim();

            if (trimmed.startsWith('cur:code')) {
                // Extract everything between quotes
                const matches = trimmed.match(/"([^"]*)"/g);
                if (matches) {
                    codes = matches.map(s => s.replace(/"/g, ''));
                }
            } else if (trimmed.startsWith('cur:keyword')) {
                const matches = trimmed.match(/"([^"]*)"/g);
                if (matches) {
                    keywords = matches.map(s => s.replace(/"/g, ''));
                }
            } else if (trimmed.startsWith('cur:content')) {
                // Extract text inside first quotes, remove citation
                const match = trimmed.match(/"([^"]*)"/);
                if (match) content = match[1];
            } else if (trimmed.startsWith('schema:educationalResource')) {
                const match = trimmed.match(/<([^>]*)>/);
                if (match) resource = match[1];
            }
        }

        if (content || keywords.length > 0) {
            standards.push({ codes, keywords, content, resource });
        }
    }
    return standards;
}

const db = parseTTL(rawTtlData);

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('resultsList');
    const noResult = document.getElementById('noResult');

    resultsContainer.innerHTML = ''; // Clear previous results
    noResult.classList.add('hidden');

    if (!query) {
        return;
    }

    // Search Logic
    const results = db.filter(item => {
        // Check keywords
        const keywordMatch = item.keywords.some(k => k.toLowerCase().includes(query));
        // Check content
        const contentMatch = item.content.toLowerCase().includes(query);
        // Check codes
        const codeMatch = item.codes.some(c => c.toLowerCase().includes(query));

        return keywordMatch || contentMatch || codeMatch;
    });

    if (results.length === 0) {
        noResult.classList.remove('hidden');
    } else {
        results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            const codesHtml = item.codes.map(c => `<span class="code-badge">${c}</span>`).join(' ');
            const keywordsHtml = item.keywords.map(k => `<span class="keyword-tag">#${k}</span>`).join(' ');

            card.innerHTML = `
                <h3>${codesHtml}</h3>
                <p><strong>수업 내용:</strong> ${item.content}</p>
                <div class="keywords">${keywordsHtml}</div>
                ${item.resource ? `<a href="${item.resource}" target="_blank" class="link-btn">영상 보러가기 📺</a>` : ''}
            `;
            resultsContainer.appendChild(card);
        });
    }
}
