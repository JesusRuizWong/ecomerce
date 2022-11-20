import React from 'react'
import Banner from './componentes/banner/Banner'
import Starrank from './componentes/starrank/Starrank'
import Topcircuits from './componentes/topcircuits/Topcircuits'
export default function HomePage() {
  return (
    <div >
      <Banner/>
      <Starrank />
      <Topcircuits />
    </div>
  )
}
