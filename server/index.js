import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import gigRoutes from './routes/gigRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import verifyAuth from './middleware/verifyAuth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/gigs', gigRoutes); // Public
app.use('/api/orders', verifyAuth, orderRoutes); // Protected

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
