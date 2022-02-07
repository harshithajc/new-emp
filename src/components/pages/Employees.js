import axios from "axios"
import React, { useEffect, useState } from "react"

function Employees(props) {
  const [posts, setposts] = useState([])
  const [editId, seteditId] = useState()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    try {
      const response = await axios.get(url)
      console.log(response.data)
      console.log(error)
      setposts(response.data)
    } catch (error) {
    }
  }
  const editemp=(id)=>{
    seteditId(id)
    props.history.push('/edit')
  }

  const deleteEmp = async (empId) => {
    console.log(empId)
    const url = `https://jsonplaceholder.typicode.com/posts/${empId}`
    try {
      const response = await axios.delete(url)
      console.log(response.data)
      const postsCopy = [...posts]
      const filteredPosts = postsCopy.filter((data) => {
        return data.id !== empId
      })
      setposts(filteredPosts)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-dark table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Job</th>
              <th scope="col">Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.userId}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
                <td>
                  <button className="btn btn-warning" onClick={()=>{editemp(index+1)}}>Edit</button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteEmp(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employees
