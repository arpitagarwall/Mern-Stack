import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext, useEffect } from "react"
import { AppContext } from "./context/AppContext"

export default function App() {

  const {fetchBlogPost} = useContext(AppContext);
  useEffect(() =>{
    fetchBlogPost();
  }, [])

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  )
}
