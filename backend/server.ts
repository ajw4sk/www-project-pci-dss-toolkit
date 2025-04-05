import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import telemetryRoutes from './routes/telemetry.route';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pci-dss', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Error:', err));

// Routes
app.use('/api/telemetry', telemetryRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
