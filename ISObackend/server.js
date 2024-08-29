// const express = require('express');
// const bodyParser = require('body-parser');
// const { Sequelize, DataTypes } = require('sequelize');
// const path = require('path');
// const cors = require('cors');

// // Initialize Express
// const app = express();
// const port = 8081;

// // Initialize Sequelize
// const sequelize = new Sequelize('isoverify', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// // Define the User model
// const User = sequelize.define('User', {
//     certificateNo: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     companyName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     companyAddress: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     timestamps: true
// });

// // Sync the model with the database
// sequelize.sync();

// // Set up EJS as the view engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

// // Route to render the form
// app.get('/', (req, res) => {
//     res.render('index');
// });
// app.get('/verify', async (req, res) => {
//     try {
//         const { certificateNo } = req.query;
//         const user = await User.findOne({ where: { certificateNo } });
//         if (user) {
//             res.json({
//                 companyName: user.companyName,
//                 companyAddress: user.companyAddress,
//                 verified: true
//             });
//         } else {
//             res.json({ verified: false });
//         }
//     } catch (error) {
//         res.status(500).send('Error retrieving data.');
//     }
// });
// // Route to handle form submissions
// app.post('/submit', async (req, res) => {
//     try {
//         const {
//             certificateNo,
//             companyName,
//             companyAddress,
//             dateOfIssue,
//             dateOfExpiry,
//             nameOfCertificate
//         } = req.body;

//         await User.create({
//             certificateNo,
//             companyName,
//             companyAddress,
//             date_of_issue: dateOfIssue,
//             date_of_expiry: dateOfExpiry,
//             name_of_certificate: nameOfCertificate
//         });

//         res.send('Data submitted successfully!');
//     } catch (error) {
//         console.error('Error submitting data:', error);
//         res.status(500).send('Error submitting data.');
//     }
// });
// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 8081;

const sequelize = new Sequelize('isoverify', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    certificateNo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_of_issue: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_of_expiry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name_of_certificate: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

sequelize.sync();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/verify', async (req, res) => {
    try {
        const { certificateNo } = req.query;

        // Find the certificate by its number in the database
        const user = await User.findOne({ where: { certificateNo } });

        if (user) {
            // Return all the necessary details if the certificate is found
            res.json({
                companyName: user.companyName,
                companyAddress: user.companyAddress,
                dateOfIssue: user.date_of_issue,    // Use the correct field name from the database
                dateOfExpiry: user.date_of_expiry,  // Use the correct field name from the database
                nameOfCertificate: user.name_of_certificate,  // Use the correct field name from the database
                verified: true
            });
        } else {
            // If no certificate is found, return `verified: false`
            res.json({ verified: false });
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send('Error retrieving data.');
    }
});

app.post('/submit', async (req, res) => {
    try {
        const {
            certificateNo,
            companyName,
            companyAddress,
            dateOfIssue,
            dateOfExpiry,
            nameOfCertificate
        } = req.body;

        await User.create({
            certificateNo,
            companyName,
            companyAddress,
            date_of_issue: dateOfIssue,
            date_of_expiry: dateOfExpiry,
            name_of_certificate: nameOfCertificate
        });

        res.send('Data submitted successfully!');
    } catch (error) {
        console.error('Error submitting data:', error);
        res.status(500).send('Error submitting data.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
