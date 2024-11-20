import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <>
        <main className='max-w-[360px] mx-auto'>
            <Outlet />
        </main>
    </>
  )
}

export default Root