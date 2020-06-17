import React from 'react';
import { NextPage } from 'next';

import { fetchSmm1Courses, Smm1Course } from '../src/modules/smm1';

interface CoursesPageProps {
  courses: Smm1Course;
}

const CoursesPage: NextPage<CoursesPageProps> = ({ courses }) => {
  return <div>{JSON.stringify(courses)}</div>;
};

export default CoursesPage;

CoursesPage.getInitialProps = async () => {
  const courses = await fetchSmm1Courses();
  return { courses };
};
