import Transfer from '../assets/images/svg/transfer.svg'
import Spinner from '../assets/images/svg/spinner.svg'
import { useState } from 'react';

const ButtonStates = {
  active: { pic: Transfer, class: ''},
  loading: { pic: Spinner, class: 'loading'},
  locked: { pic:'', class: 'loading'}
}

function ConvertButton() {
  const [buttonState, setButton] = useState(ButtonStates.active);

  return (
    <button className={`basic-button main-button ${buttonState.class}`}>
      <img src={buttonState.pic} alt="" />
    </button>
  )
}

export default ConvertButton;