
import './App.css';
import image1 from '../src/assets/image1.jpeg'
import image2 from '../src/assets/image2.jpeg'
import image3 from '../src/assets/image3.jpeg'
import image4 from '../src/assets/image4.jpeg'
function App() {
  return (
    
    <div className=" flex items-center justify-center">
    
      <div className=' flex justify-center items-center w-full gap-20 mt-20'>
   
        <div className='bg-yellow-200 w-2/12  mt-10'>
 <img src={image1} alt="" className='h-80' />
        </div>
        <div className='bg-yellow-200 w-2/12  mt-10'>
 <img src={image2} alt="" className='h-80' />
        </div>
        <div className='bg-yellow-200 w-2/12  mt-10'>
 <img src={image3} alt="" className='h-80' />
        </div>
        <div className='bg-yellow-200 w-2/12  mt-10'>
 <img src={image4} alt="" className='h-80' />
        </div>
      </div>
    </div>
  );
}

export default App;
