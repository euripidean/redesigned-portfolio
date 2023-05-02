import projects from './projects.json';

const data = projects.map((project, i) => {
  return { ...project, id: i };
});

console.log(data)
export default data;

