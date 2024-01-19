const express = require('express');
const cors = require('cors');
const app = express();
app.use('/assets', express.static('assets'));
app.use(cors());

const users = [
    {
        "id": 1,
        "uid": Math.random().toString(36).substr(2, 9),
        "name": "Triển phạm",
        "avatar": "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        "id": 2,
        "uid": Math.random().toString(36).substr(2, 9),
        "name": "Triển Nguyễn",
        "avatar": "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
    },
    {
        "id": 3,
        "uid": Math.random().toString(36).substr(2, 9),
        "name": "Triển Lê",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-K-u14-UjGtTTGAMhTefLxCNvHByNspiTRUAj-RscyQ&s"
    }
];




app.get('/api/v1/users', (req, res) => {
    res.status(200).json({
        "users": users
    });
});

app.get('/api/v1/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ "message": "User not found" });
    }
});

// app.get('/api/v1/details/:gender', (req, res) => {
//     const gender = req.params.gender;
//     if (gender === 'men') {
//         res.status(200).json({
//             "detailsImgMen": detailsImgMen
//         });
//     } else {
//         res.status(404).json({ "message": "User not found" });
//     }
// });


app.listen(5000, () => { console.log("Server started on port 5000") });
