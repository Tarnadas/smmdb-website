import fetch from 'isomorphic-unfetch';

import { Smm2Course } from './types';

export async function fetchSmm2Courses() {
  const courses = await fetch(`${process.env.API_DOMAIN}/courses2`);
  const smmCourses = (await courses.json()) as Promise<Smm2Course>;
  return smmCourses;
}
