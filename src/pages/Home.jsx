import ArrayMenu from '../components/Menus/ArrayMenu'
import OptionMenu from '../components/Menus/OptionMenu'
import InsertMenu from '../components/Menus/InsertMenu'
import SearchMenu from '../components/Menus/SearchMenu'
import KeyInfo from '../components/KeyInfo'

const Home = () => {
  return (
    <>
      <ArrayMenu />
      <br />
      <OptionMenu />
      <br />
      <InsertMenu />
      <br />
      <SearchMenu />
      <br />
      <KeyInfo />
    </>
  )
}

export default Home