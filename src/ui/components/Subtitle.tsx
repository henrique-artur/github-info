import { ReactNode } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import '../styles/components/Subtitle.css';

interface SubtitleProps {
  label?: string
  prefixIcon?: ReactNode
}

function Subtitle({label, prefixIcon}: SubtitleProps): JSX.Element {
  let className = 'subtitle'

  if(prefixIcon) {
    className += ' username'
  }

  return (
    <div className="appSubtitle">
      <div className="topic"></div>
      {prefixIcon && (
        <div 
          className="prefixIcon"
        >
          {prefixIcon}
        </div>
      )}
      <div className={className}>
        <h2>{label ? label : ''}</h2> 
      </div>
      {prefixIcon && (
        <div
          className="sufixIcon"
        >
          <BsArrowRight size={32}/>
        </div>
      )}
    </div>
  )
}

export default Subtitle