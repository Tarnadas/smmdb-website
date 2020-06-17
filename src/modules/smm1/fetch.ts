import fetch from 'isomorphic-unfetch';

import { Smm1Course } from './types';

export async function fetchSmm1Courses() {
  const courses = await fetch(`${process.env.API_DOMAIN}/courses`);
  const smmCourses = (await courses.json()) as Promise<Smm1Course>;
  return smmCourses;
}
