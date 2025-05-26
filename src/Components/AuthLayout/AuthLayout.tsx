import authImg from '../../assets/bookstorimg.jpg'

export default function AuthLayout() {
  return (
    <div className='row justify-content-center'>
        <div className="col-12 col-md-6 order-sm-2 order-md-0">
            <img src={authImg} alt="book store image" className='w-100'/>
        </div>
        <div className="col-12 col-md-6 order-sm-1 order-md-2">
            auth
        </div>
    </div>
  )
}
