export class CreateCourseDto {
  readonly name: string;
  readonly description: string;
  readonly objective: string;
  readonly workload: number;
  readonly period: {
    start: Date;
    end: Date;
  };
}
