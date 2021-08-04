import { Project } from './../types/projects';
import Axios from "axios"
import { PROJECT_ENDPOINT } from "../endpoints"
import HelpersApi from "./helpers"
import { ApiError } from "../types/error"
import { ProjectResponse, ProjectOneResponse } from "../types/projects"


class ProjectApi {
  static getProjects(): Promise<Project[] | ApiError> {
    return Axios.get<ProjectResponse>(PROJECT_ENDPOINT, {
      headers: HelpersApi.headers(),
      withCredentials: false,
    })
      .then((response) => {
        const { data } = response.data
        if (data) {
          return data;
        } else {
          return []
        }
      })
      .catch(HelpersApi.errorHandler("getProjects"))
  }

  static getOneProject(id: number): Promise<Project | null | ApiError> {
    return Axios.get<ProjectOneResponse>(`${PROJECT_ENDPOINT}/${id}`, {
      headers: HelpersApi.headers(),
      withCredentials: false,
    })
      .then((response) => {
        const { data } = response.data
        if (data) {
          return data;
        } else {
          return null
        }
      })
      .catch(HelpersApi.errorHandler("getProjects"))
  }
}

export default ProjectApi
