import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
  name: String,
  description: String,
  objective: String,
  workload: Number,
  period: {
    start: Date,
    end: Date
  }
});