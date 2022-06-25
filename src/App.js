import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000">
        JePra - React FE Sample
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {

  const [node, setNode] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/users", {
      // credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        setNode(data.node)
        setUsers(data.users)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          FrontEnd Node 1 | BackEnd Node {node}
        </Typography>
        
          {users.map((e, key) => (
          <>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {e.name}
              </Typography>
              <Typography variant="body2">
                {e.birthDate}
              </Typography>
              <Typography variant="body2">
                {e.sex}
              </Typography>
            </CardContent>
          </Card>
          <br />
          </>
          ))}
        <Copyright />
      </Box>
    </Container>
  );
}
