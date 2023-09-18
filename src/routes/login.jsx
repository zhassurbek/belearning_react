// src/routes/login.jsx

import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
// для подключения к бэку
import axios from 'axios';


export default function Login() {

    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        // Ваши валидации

        try {
            const response = await axios.post('http://localhost:8085/api/v1/auth/signin', {
                username: username,
                password: password
            });

            // Обработка успешного входа, например, сохранение токена или перенаправление
            const token = response.data.token;
            localStorage.setItem('token', token);

            // Перенаправление пользователя на другую страницу
            navigate('/dashboard'); // Здесь /dashboard - путь к странице после успешного входа
        } catch (error) {
            // Обработка ошибки входа
            setError("Invalid username or password."); // Пример сообщения об ошибке
        }
    }

    return (
        <Container maxWidth="xs" sx={{mt: 2}}>
            <Typography variant="h5" component="h1" gutterBottom textAlign="center">
                Login
            </Typography>
            {error && <Alert severity="error" sx={{my: 2}}>{error}</Alert>}
            <Box component="form" onSubmit={onSubmit}>
                <TextField
                    label="Username"
                    variant="outlined"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{mt: 1}}
                    fullWidth
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{mt: 3}}
                    fullWidth
                />
                <Button variant="contained" type="submit" sx={{mt: 3}} fullWidth>Login</Button>
                <Box sx={{mt: 2}}>
                    Don't have an account yet? <Link href="/register">Register</Link>
                </Box>
            </Box>
        </Container>
    )
}