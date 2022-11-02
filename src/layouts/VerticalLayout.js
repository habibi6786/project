// ** React Imports
import { Outlet } from "react-router-dom"

// ** Core Layout Import
// !Do not remove the Layout import
import Layout from "@layouts/VerticalLayout"

// ** Menu Items Array
import navigation from "@src/navigation/vertical"

// const VerticalLayout = (props) => {
//   // const [menuData, setMenuData] = useState([])

//   // ** For ServerSide navigation
//   // useEffect(() => {
//   //   axios.get(URL).then(response => setMenuData(response.data))
//   // }, [])

//   return (
//     <Layout menuData={navigation} {...props}>
//       <Outlet />
//     </Layout>
//   )
// }

const CustomNavbar = (props) => {
  console.log(props)
  return <p className='mb-0'>I am in navbar everything else is removed</p>
  
}


const VerticalLayout = props => {
  return (
    <Layout navbar={props => <CustomNavbar {...props} />} menuData={navigation} {...props}>
      {props.children}
      <Outlet />
    </Layout>
  )
}

export default VerticalLayout
