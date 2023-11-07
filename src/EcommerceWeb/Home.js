import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <>
    <div className='w-100'>
        <img  className='w-100 h25' style={{height:'300px'}} src="/Images/ecommerce.jpg" alt="ecommerce" />
    </div>
    <div className='products bg-light p-3'>
    <div className='p-3 d-flex'>
      <div className='w-50 p-2 bg-white m-2'>
<Products

id={1}
title={"This is newly generation (PC)"}
image ={"laptop6g.jpg"}
price={240}

/>
      </div>

      <div className='w-50 p-2 bg-white m-2'>
<Products

id={2}
title={"Newly Chair"}
image ={"chair.jpg"}
price={150}
/>
      </div>
    </div>

    <div className='p-3 d-flex'>
      <div className=' p-2 bg-white m-2'>
<Products

id={3}
title={" branded smart watch"}
image ={"smart watch.jpg"}
price={180}
/>
      </div>

      <div className=' p-2 bg-white m-2'>
<Products

      
id={4}
title={" Sofa with Pillow"}
image ={"sofa.jpg"}
price={320}
/>
      </div>

      <div className=' p-2 bg-white m-2'>
<Products

      
id={5}
title={" Men's Jacket"}
image ={"shirt.jpg"}
price={280}
/>
      </div>
    </div>


    <div className='p-3 d-flex'>
      <div className=' p-2 bg-white m-2'>
<Products

id={6}
title={"digital watch"}
image ={"watch.jpg"}
price={285}
/>
      </div>

      <div className=' p-2 bg-white m-2'>
<Products

id={7}
title={" Branded laptop"}
image ={"laptop.jpg"}
price={399}
/>
      </div>

      <div className=' p-2 bg-white m-2'>
<Products

id={8}
title={"Men's jacket"}
image ={"jacket.jpg"}
price={299}
/>
      </div>
      </div>


    <div className=' p-3 '>
      <div className=' p-2 bg-white m-2 d-flex justify-content-center'>
<Products

      
id={9}
title={" branded earbuds"}
image ={"earbud.jpg"}
price={199}
/>
      </div>
      </div>

    </div>
    </>
  )
}

export default Home