import { Project, TypeProject } from '../types/projects';

export const  splitServicesOrProjects = (projects: Project[], key: TypeProject): Project[]  => {
   return projects.filter((project: Project) => project.type === key);
}