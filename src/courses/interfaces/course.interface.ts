import { Document } from 'mongoose';

export interface Course extends Document {
  name: string;
  description: string;
  objective: string;
  workload: number;
  period: {
    start: Date;
    end: Date;
  };
}