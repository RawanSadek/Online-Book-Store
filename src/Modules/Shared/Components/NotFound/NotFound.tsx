import notFound from '../../../../assets/Not found.gif'
export default function NotFound() {
  return (
    <div className='text-center'>
      <img src={notFound} alt="" className='vh-100'/>
    </div>
  )
}
