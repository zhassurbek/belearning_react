// import React, { useState, useEffect } from 'react';
// import PostList from './PostList';
// import axios from "axios"; // Импортируйте компонент PostList
//
// function Posts() {
//     const [posts, setPosts] = useState([]);
//
//     useEffect(() => {
//         // Здесь вы можете сделать запрос к вашему API и получить список постов
//         // и затем установить их в состояние компонента
//         // Например, используя axios:
//         axios.get('http://localhost:8085/articles/all')
//             .then(response => {
//                 setPosts(response.data);
//             })
//             .catch(error => {
//                 console.error('Ошибка при получении данных:', error);
//             });
//     }, []);
//
//     return (
//         <div>
//             {/* Ваш код для формы входа */}
//             {/* Отображение списка постов с помощью компонента PostList */}
//             <PostList posts={posts} />
//         </div>
//     );
// }
//
// export default Posts;
