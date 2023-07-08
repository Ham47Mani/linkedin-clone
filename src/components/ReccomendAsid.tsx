import Box from "./Box";
import BoxFollow from "./BoxFollow";
import { FaArrowRight } from "react-icons/fa"

const ReccomendAsid = () => {
  return (
    <Box className="py-2 px-3 hidden lg:w-[25%] xl:block">
      <h3 className="text-lg font-semibold text-black/70">Add to your feed</h3>
      <div className="my-4">
        <BoxFollow />
        <BoxFollow />
        <BoxFollow />
      </div>
      <a href="" className="font-semibold text-black/50 py-1 px-2 hover:bg-black/10 flex items-center gap-2 w-fit rounded-sm">
        View all recommendation
        <FaArrowRight />
      </a>
    </Box>
  )
}

export default ReccomendAsid;