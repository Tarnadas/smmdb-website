export function getTitle(pathname: string): string {
  switch (pathname) {
    case '/':
      return 'SMMDB';
    case '/courses':
      return 'SMMDB - Courses';
    default:
      return 'SMMDB';
  }
}
