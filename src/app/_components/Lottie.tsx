import { DotLottieReact } from "@lottiefiles/dotlottie-react"

type  Size = 1 | 2 | 3|4|5|6

const LottieView = ({ lottie, width = 1, widthL = 2, widthLL = 1,  }: { lottie: string, width?: Size, widthL?: Size, widthLL?: Size}) => {
    return <div className={`w-6/6 sm:w-4/6 md:w-3/6`}>
        <DotLottieReact
        src={lottie}
        loop
        autoplay
    />
    </div> 
}

export default LottieView


export const LottieFiles = {
    loader: '/raw/loader.json',
    error: '/raw/error.json',
    search: '/raw/search.json',
    searchError: '/raw/search_error.json',
    empty: '/raw/empty.json',
}