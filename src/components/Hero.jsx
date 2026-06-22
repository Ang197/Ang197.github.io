import HeroImage from '../assets/hero-image.jpg'

export default function hero() {
    return (
        <div className=' text-white text-center'>
            <div className="animate-[zoomIn_0.6s_ease-out_forwards] px-10 py-10">
                <img
                    src={HeroImage}
                    alt=""
                    className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
                           transition-transform duration-300'
                />
                <h1 className='text-5xl'>
                    <span className='font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-300 to-blue-500'>
                        I'm Angelo Lance Quetua
                    </span>
                </h1>
            </div>
        </div>
    )
}