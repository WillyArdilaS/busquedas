import {FormIndices} from './form';
import {Steps} from './renderSteps';
import { UserProvider } from '../components/IndexContext';

const Index = ({opcionIndice}) => {
  return (
    <UserProvider>
      <main className='flex justify-between w-11/12 my-12 mx-auto'>
        <section className='w-1/5'>
          <FormIndices/>
        </section>
        
        <section className={`${opcionIndice == 1 || opcionIndice == 2 ? "w-2/5" : "w-2/3"}`}>
          <Steps opcionIndice={opcionIndice}/>
        </section>
      </main>
    </UserProvider>
  )
}

export default Index