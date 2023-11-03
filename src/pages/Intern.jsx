import { useState } from 'react'
import { ArrayProvider } from "../context/ArrayContext"
import ArrayMenu from '../components/Menus/ArrayMenu'
import OptionMenu from '../components/Menus/OptionMenu'
import InsertMenu from '../components/Menus/InsertMenu'
import SearchMenu from '../components/Menus/SearchMenu'
import CollisionMenu from '../components/Menus/CollisionMenu'
import Array from '../components/Array'

const Intern = ({type}) => {
  const [arrayCreated, setArrayCreated] = useState(false);
  const [insertOption, setInsertOption] = useState(false);
  const [searchOption, setSearchOption] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [collisionSelected, setCollisionSelected] = useState(false)

  return (
    <ArrayProvider>
      <main className='flex justify-between w-11/12 my-12 mx-auto'>
        <section>
          <ArrayMenu arrayCreated={arrayCreated} setArrayCreated={setArrayCreated}/>

          <div className={arrayCreated ? "" : "hidden"}>
            <OptionMenu setArrayCreated={setArrayCreated} setInsertOption={setInsertOption} setSearchOption={setSearchOption} setShowInfo={setShowInfo} 
            setCollisionSelected={setCollisionSelected}/>
          </div>
        </section>

        <section>
          <div className={insertOption ? "" : "hidden"}>
            <InsertMenu collisionSelected={collisionSelected} type={type}/>
          </div>
          
          {type != "sequential" && type != "binary" ? (
            <div className={insertOption ? "" : "hidden"}>
                <CollisionMenu collisionSelected={collisionSelected} setCollisionSelected={setCollisionSelected}/>
            </div>
          ) : <div></div>}
                          
          <div className={searchOption ? "" : "hidden"}>
            <SearchMenu showInfo={showInfo} setShowInfo={setShowInfo} type={type}/>
          </div>
        </section>

        <section>
          <div className={arrayCreated ? "" : "hidden"}> 
            <Array />
          </div>
        </section>
      </main>
    </ArrayProvider>
  )
}

export default Intern