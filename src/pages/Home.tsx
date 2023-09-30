import { useEffect } from "react"
// import { useAppDispatch } from "../utility/type"
import { getData } from "../redux/actions"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

const Home = () => {
  // const dispatch = useAppDispatch()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const [allData, setAllData] = useState<Array<Object>>([])

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div>
      <div>
        <p onClick={() => navigate("/admin")}>Yo</p>
      </div>
    </div>
  )
}

export default Home
