import { Difficulty } from '../shared/types';

export interface Smm2CourseEntry {
  id: string;
  owner: string;
  uploader: string;
  difficulty?: Difficulty;
  last_modified: number;
  uploaded: number;
  course: Smm2Course;
}

export interface Smm2Course {
  version: number;
  header: Sm2CourseHeader;
  course_area: Smm2CourseArea;
  course_sub_area: Smm2CourseArea;
}
