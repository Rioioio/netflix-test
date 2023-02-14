const quizData = [
  {
      question: "Q.1 " + "아이고~ 강프로 ____ 은/는 많이 잡쉈어??",
      picture : "../images/quiz1.png",
      a:" 1)  홍어",
      b:"  2)  코카인 ",
      c:" 3)  식사  ",
      d:" 4)  점심  ",
      correct:"c"
  },
  {  
      question:"Q.2 " + " 극 중 구상만(박해수)이 전요환 목사(황정민)을 잡기 위해 미국의 영토인 ______에서 마약 거래를 하자고 유도한다. 그 국가는 무엇일까. ",
      picture : "../images/quiz2.png",
      a:" 1)  아프가니스탄  ",
      b:"  2)  콜롬비아",
      c:" 3)  나이지리아 ",
      d:" 4)  푸에르토리코 ",
      correct:"d"
  },
  {  
      question:"Q.3 " + "  극 중 강인구(하정우)가 수리남으로 가기 전에 한국에서 돈을 벌기 위해 한 일 중에 아닌 것은?   ",
      picture : "../images/quiz3.png",
      a:" 1)  단란주점 종업원으로 근무 ",
      b:" 2)  미군 부대에 식자재 납품 ",
      c:" 3)  공사장에서 막노동  ",
      d:" 4)  산에서 막걸리 팔기  ",
      correct:"c"
  },
  {  
      question:"Q.4 " + " 사진 속 장면에 어울리는 대사는?  ",
      picture : "../images/quiz4.png",

      a:" 1)  진심으로 결혼 축하해, 연진아!",
      b:" 2)  멋지다, 연진아! ",
      c:" 3)  나 지금 되게 신나, 연진아! ",
      d:"4)  최고야, 연진아!",
      correct:"b"
  },
  {
      question:"Q.5 " + " 사진 속 인물들(문동은 & 주여정)의 극중 관계는?  ",
      picture : "../images/quiz5.png",
      a:" 1)  연인",
      b:" 2)  가족 ",
      c:" 3)  선후배 ",
      d:" 4)  직장동료  ",
      correct:"c"
  },
  {
      question:"Q.6 "+ " 사진 속 인물 전재준은 어떤 병을 앓고 있다. 이 병은?",
      picture : "../images/quiz6.png",
      a:" 1)  녹내장",
      b:" 2)  고혈압 ",
      c:" 3)  적록색약 ",
      d:" 4)  당뇨  ",
      correct:"c"
  }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const imagesEls = document.getElementById('picture')
const questionEl = document.getElementById('question')
const pictuerEl = document.querySelector('.picture')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  imagesEls.src = currentQuizData.picture
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false )
}

function getSelect() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked){
          answer = answerEl.id
      }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelect()
  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++
      }
  }
  

  currentQuiz++

  if(currentQuiz < quizData.length) {
    loadQuiz()
    console.log(answer, quizData[currentQuiz].correct)
} else {
    if (score >= 5) {
        quiz.innerHTML = `
            <div class="score">${quizData.length}문제 중 ${score}개를 맞추셨네요!</div>
            <div class="result-type">당신은 .. 넷플릭스 덕후</div>
            <img src="../images/level3.jpg" alt ="picture">
            <div class="result-ment">당신은 넷플릭스 덕후! 자나깨나 넷플릭스와 함께인 당신~ 혹시 지금도 넷플릭스를 보고 계신건 아니죠?..😝</div>
            <button onclick="location.href='./index.html'">다시 도전하기!</button>
        `
    }else if (score >= 2){
        quiz.innerHTML = `
            <div class="score">${quizData.length}문제 중 ${score}개를 맞추셨네요!</div>
            <div class="result-type">당신은 .. 넷플릭스 찐팬!</div>
            <img src="../images/level2.jpg" alt ="picture">
            <div class="result-ment">넷플릭스 없인 못살아~ 넷플릭스 찐팬인 당신! 우리 우정 Forever.. 😍</div>
            <button onclick="location.href='./index.html'">다시 도전하기!</button>
        `
    }else {
        quiz.innerHTML = `
            <div class="score">${quizData.length}문제 중 ${score}개를 맞추셨네요!</div>
            <div class="result-type">당신은 .. 넷린이!</div>
            <img src="../images/level1.jpg" alt ="picture">
            <div class="result-ment">당신은 이제 막 넷플릭스를 알아가는 단계군요..! 넷플릭스와 가까워지기 위해 더욱 더 분발해 주세요😉</div>
            <button onclick="location.href='./index.html'">다시 도전하기!</button>
        `
    }
}
})