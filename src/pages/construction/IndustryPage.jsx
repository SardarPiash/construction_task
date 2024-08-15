import React from 'react'
import HeroSection from '../../component/HeroSection'
import Recruitment from './Recruitment'

 function Industry({scrollFunction},ref) {
  return (
    <div>
        <HeroSection />
        <Recruitment ref={ref} scrollFunction={scrollFunction}/>
    </div>
  )
}
 const IndustryPage = React.forwardRef(Industry)

export default  IndustryPage