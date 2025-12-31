

const NavBar = () => {
  return (
    <>
    <div className='w-full'>
      <div className='flex justify-between items-center py-3 px-6 h-16 shadow bg-transparent'>
        <div className='flex gap-2'>
          <img src="" alt='logo' />
          <h1 className="text-lg font-bold space-x-1">MB</h1>
        </div>
        
        <ul className=' flex gap-2 text-lg font-mono'>
          <li>Home</li>
          <li>About</li>
          <li>Places</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>
    </>
  )
}

export default NavBar
