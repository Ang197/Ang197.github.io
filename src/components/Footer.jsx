export default function Footer(){
    return(
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
                    <div className="flex-1 mb-4 md:mb-0">
                        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row
                                        justify-between items-center"
                        >
                            <p className="text-gray-400">
                                &copy; {new Date().getFullYear()} Angelo. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}