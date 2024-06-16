import Image from "next/image"


const SplashLoading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Image src={'./icon_log.svg'} width={100} height={100} alt={"Logo"} />
            
        </div>
    )
}


export default SplashLoading