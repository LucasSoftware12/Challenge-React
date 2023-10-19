import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import {Navigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("tom.manchini@yopmail.com");
  const [token, setToken] = useState("eyJhbGciOiJIUzI1NiJ9.eyJwcmluY2lwYWwiOiJINHNJQUFBQUFBQUFBSlZTUFc4VFFSUjhaeHdGS1FJU0pFQVVTVVBvMEZtQzBvMFR5NkNna3hPUnVERVNhSDMzZkd5eXQ3dnNSMkkzeUJVVUtZS0FTRWo4aGZCTG9PRUhJQ2hvVTlQeTl2SnhoaVppcTlYYnVabDVNM2QwRERQV3dJUGNNQzVzcklYUHVZeXRObHptRmxOdnVCdkgzcUxKMEpXSVJ5V3dSeE00T1ZFTm9nUnFQSE53UGRsbXU2d2htTXdiNjROdFRGMXpaT0MrTXZrcDQ5Q3dBdmVVMlluUHVWTmw4QytCaWpwcTFXQzJEd3NzVFpXWHJxdGtaNlM1d2F3UDg5VXNVZWxPR04xSTZRV2w0MHpZYWVnc1NqWVFtQ1V3eDd4N29VaVZvM1Z3N2NTc2QxdzBOdEUxRTdpc21iWGs3cDlOTmwyd0h0NkRUVWtidklSWFVCXC9waUE1bGR6ZEE0OEFUdDVVUXREVlgwaTczWktFeVB1UkJuUGduaSsrK0hYeWE5R29BbE1tOWk3K3A1cmRYWWZMbDJlK2xNdWdvZFhCenlub0ZhNDQwdVZtb21MY01CdVh2SHpmZUh4NlwvZVhxSmxBUGk0ZlwvM3NieHltdHk0clFyTkRITnFxaU9pM2F1SE81RzNMaVlcL2EyRWNcL2lYcE1Ec25YeXUwcUdocDJicFI0aXh0QjFlZXJDZWQ1eHNyN2JWT2Q2c1RKa3VwWUQ3akxNNVFzS0duOXJFMVZyb2c0NlJWa0orclpSeWh4emhSMU9MK3I3ZGZEKzc4SVBiSE1MUExoRWRxWTc0Q2RYMHhRUFA2NkhCeDdzUFBcL1hLMzB0Q3RcL3VjXC94UkM2YUNzREFBQT0iLCJzdWIiOiJjbGF1ZGlhLmRlbGFmdWVudGVAeW9wbWFpbC5jb20iLCJleHAiOjE2NTcwNDY1OTAsImlhdCI6MTY1NzA0Mjk5MCwicm9sZXMiOlsiUk9MRV9QQUNJRU5URSJdfQ.fvEgMciT0sZanCqXZArzI4YFIkWdgyt2FtPTdFyHFyM");
  const [error,setError] = useState(false)
  const handleLogin = async () => {
    axios
      .get("https://www.mockachino.com/06c67c77-18c4-45/login")
      .then((response) => {
        const data = response.data;

        if (data.username === username && data.access_token === token) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", JSON.stringify(username));
          setIsLoggedIn(true);
          <Navigate to="/dashboard"></Navigate>
        } else {
          setError(true)
          console.error("Credenciales incorrectas");
        }
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud de inicio de sesión:", error);
      });
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      
    <Container>
      <Row className="justify-content-end align-items-center">
        <Col xs={4}>
          <h1>Login</h1>
          <Form>
            <div className="mb-4">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            </div>
            <div className="mb-4">
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </Form.Group>
            </div>
            {error && <div className="alert alert-danger mt-4">Credenciales incorrectas</div>}
            <Row style={{paddingLeft:'12px',paddingRight:'12px'}}>
            <Button variant="danger" onClick={handleLogin}>
              Ingresar
            </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
   
  );
};

export default Login;
