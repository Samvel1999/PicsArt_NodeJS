const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/users', require('./routes/api/userRoutes'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));