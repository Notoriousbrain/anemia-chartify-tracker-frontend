import { useEffect } from "react"
import { useAppDispatch } from "../utility/type"
import { getData } from "../redux/actions"

const Home = () => {
  const dispatch = useAppDispatch()
  // const [allData, setAllData] = useState<Array<Object>>([])

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div>
      <div>
        <p>Yo</p>
      </div>
    </div>
  )
}

export default Home
