import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { ControlledComponent } from './components/ControlledComponent'
import CounterClass from './components/CounterClass'
import { CounterFunctional } from './components/CounterFunctional'
import { useCallback } from 'react'

function App() {

  const handleClicked = () => {
    alert('Button clicked');
  }

  const [cardInfo, setCardInfo] = useState({
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Card Title',
    rating: 5.0,
    reviews: 10,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc non nunc fermentum tincidunt. Nullam nec nunc non nunc fermentum tincidunt. Nullam nec nunc non nunc ferment'
  });

  const handleReviewd = () => {
    setCardInfo((prev) => {
      return {
        ...prev,
        reviews: prev.reviews + 1
      }
    })
  }

  const callback = useCallback((data) => {
    setCardInfo((prev) => {
      return {
        ...prev,
        title: data
      }
    })
  }, [cardInfo]);


  return (
    <>
      <Card cardInfo={cardInfo} addReview={handleReviewd} callBackFunction={callback} />
    </>
  )
}

export default App
