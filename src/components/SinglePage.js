import { useState, useRef } from 'react'

function SinglePage () {

  const [height, setHeight] = useState(175)
  const [weight, setWeight] = useState(70)
  const [age, setAge] = useState(25)

  const [manORgirl, setGender] = useState(null)

  const refGirl = useRef()
  const refMan = useRef()
  const refOther = useRef()

  const setClassGirl = () => {
    refGirl.current.className += ' btn-sel'
    refMan.current.className = 'btn'
    refOther.current.className = 'btn'
  }
  const setClassMan = () => {
    refMan.current.className += ' btn-sel'
    refGirl.current.className = 'btn'
    refOther.current.className = 'btn'
  }
  const setClassOther = () => {
    refOther.current.className += ' btn-sel'
    refGirl.current.className = 'btn'
    refMan.current.className = 'btn'
  }

  return (
    <>
      <div className="title-wrapper">
        <h1 className="main-title">Привет!</h1>
        <p className="main-title-text">Для работы с приложением заполни первичную информацию</p>
      </div>
      <div>
        <div className="wrapper-btn">
          <button ref={refGirl} className="btn btn1" value="Девушка" onClick={(e) => {
            setClassGirl()
            setGender(e.target.value)
          }}>Девушка</button>
          <button ref={refMan} className="btn btn2" value="Мужчина" onClick={(e) => {
            setClassMan()
            setGender(e.target.value)
          }}>Мужчина</button>
          <button ref={refOther} className="btn btn3" value="Другое" onClick={(e) => {
            setClassOther()
            setGender(e.target.value)
          }}>Другое</button>
        </div>
        <div className="wrapper-questions">
          <div className="question">
            <p>Какой у тебя рост?<sup className="cm">см</sup></p>
            <div className="wrapper-height">
              <button onClick={() => setHeight(height - 1)}>{height - 1}</button>
              <input type="text" placeholder={height} onChange={(e) => {
                setHeight(Number(e.target.value))
                setTimeout(() => {
                  e.target.value = ''
                }, 2000)
              }} />
              <button onClick={() => setHeight(height + 1)}>{height + 1}</button>
            </div>
          </div>
          <div className="question">
            <p>Какой вес?<sup className="cm">кг</sup></p>
            <div className="wrapper-height">
              <button onClick={() => setWeight(weight - 1)}>{weight - 1}</button>
              <input type="text" placeholder={weight} onChange={(e) => {
                setWeight(Number(e.target.value))
                setTimeout(() => {
                  e.target.value = ''
                }, 2000)
              }} />
              <button onClick={() => setWeight(weight + 1)}>{weight + 1}</button>
            </div>
          </div>
          <div className="question">
            <p>Сколько тебе лет?</p>
            <div className="wrapper-height">
              <button onClick={() => setAge(age - 1)}>{age - 1}</button>
              <input type="text" placeholder={age} onChange={(e) => {
                setAge(Number(e.target.value))
                setTimeout(() => {
                  e.target.value = ''
                }, 2000)
              }} />
              <button onClick={() => setAge(age + 1)}>{age + 1}</button>
            </div>
          </div>
        </div>
        <div>
          <button className="next-step">Следующий этап</button>
        </div>
      </div>
    </>
  )
}

export default SinglePage