import {FormIndices} from './form';
import {Steps} from './renderSteps';
import { UserProvider } from '../components/IndexContext';

const Index = ({opcionIndice}) => {
  return (
    <UserProvider>
      <main className='flex justify-between w-11/12 my-12 mx-auto '>
        <section className='w-1/4'>
          <FormIndices/>
        </section>
        
        <section className='w-1/2'>
          <Steps opcionIndice={opcionIndice}/>
        </section>
      </main>
    </UserProvider>
  )
}

export default Index