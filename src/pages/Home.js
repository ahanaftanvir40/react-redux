import { Cards } from "../components"
import { useTitle } from "../hooks/useTitle"


export const Home = ({ title }) => {
    useTitle(title)
    return (
        <div className="flex justify-start max-sm:justify-evenly flex-wrap  max-w-screen-xl m-auto min-h-full p-3  ">
            <Cards />
        </div>
    )
}
