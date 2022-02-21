import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import {AnswersList, Chats} from './components/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        answers: [],                //回答コンポーネントに表示するデータ
        chats: [],                  //チャットコンポーネントに表示するデータ
        currentId: "init",          //現在の質問ID
        dataset: defaultDataset,    //質問と回答のデータセット
        open: false                 //問い合わせフォーム用モーダルの開閉を管理
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      // 初期状態
      case(nextQuestionId === 'init'):
        // 回答をわざと遅延表示（チャットっぽく）
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000)
        break;

      // nextQuestionIdの中身がURLだった時の処理
      case(/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a')
        a.href = nextQuestionId
        a.target = '_blank'
        a.click()
        break;

      default:
        const chats = this.state.chats
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        })

        this.setState({
          chats: chats
        })

        // 回答をわざと遅延表示（チャットっぽく）
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000)
        break;
    }
  }

  componentDidMount() {
    this.initAnswer = ""
    this.selectAnswer(this.initAnswer, this.state.currentId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const scrollArea = document.getElementById('scroll-area')
    if(scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  render() {
    return (
      <div>
        <section className="c-section">
          <div className="c-box">
            <Chats chats={this.state.chats} />
            <AnswersList answers={this.state.answers} select={this.selectAnswer} />
          </div>
        </section>
      </div>
    );
  }
}