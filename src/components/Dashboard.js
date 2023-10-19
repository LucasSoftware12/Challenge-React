import React, { useState, useEffect } from "react"
import { Container, Table, Button, Row, Col } from "react-bootstrap"
import axios from "axios"

const Dashboard = ({ setIsLoggedIn }) => {
  const [users, setUsers] = useState([])
  const userName = localStorage.getItem("username")

  useEffect(() => {
    axios
      .get("https://www.mockachino.com/06c67c77-18c4-45/users")
      .then((response) => {
        if (Array.isArray(response.data.users)) {
          setUsers(response.data.users)
        } else {
          console.error(
            "La respuesta de la API no contiene un array de usuarios."
          )
        }
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios:", error)
      })
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
  }

  return (
    <Container>
      <Row style={{ marginTop:"30px" }}>
        <Col>Hola {userName}</Col>
        <Col style={{ textAlign: "right" }}>
          <Button variant="outline-danger" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Fecha de Nacimiento</th>
              <th>Género</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Profesión</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.surnames}</td>
                <td>{user.birthDate}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.profesion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Dashboard
