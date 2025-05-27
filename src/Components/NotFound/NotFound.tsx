import notFound from '../../assets/book-with-broken-pages-animation-404-error.gif'
export default function NotFound() {
  return (
    <div className='text-center'>
      <img src={notFound} alt="" className='vh-100'/>
    </div>
  )
}
