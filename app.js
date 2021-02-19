import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';

// Routes
import HomeRoutes from './src/routes/home';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', HomeRoutes);
  }
}

export default new App().app;
