import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
  return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

const Statistics = ({data}) => {
  const {good, neutral, bad, all, average, positive} = data

  if(good + neutral + bad === 0){
    return <p>No feedback given</p>
  }

  return(
    <>
    <h1>statistics</h1>
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
    </>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = `${(good * 100) / all}%`

  const statisticsData = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: average,
    positive: positive
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics data={statisticsData} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)