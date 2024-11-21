import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <>
        <main className='max-w-[360px] h-screen mx-auto relative p-3'>
            <Outlet />
        </main>
    </>
  )
}

export default Root