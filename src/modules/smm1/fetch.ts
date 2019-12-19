import fetch from 'isomorphic-unfetch';

export async function fetchSmm1Courses() {
  const courses = await fetch(`${process.env.API_DOMAIN}/`);
}
