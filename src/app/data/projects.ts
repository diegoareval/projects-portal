import { IProject } from "../typings/project";
const testProject: IProject = {
    title: "Tecnipos",
    subtitle: "Software to manage fixing hardware bussiness",
    thumbnailSrc:
        "https://sambapos.com/wp-content/uploads/03-Complete-Customization-image-copy-600x400.jpg",
    totalPrice: 7000,
    monthlyPrice: 600,
    area: "Fixing hardware",
    description: "This is a Description",
};

const testProject2: IProject = {
    title: "Restaurant System",
    subtitle: "Software to manage restaurant agences",
    thumbnailSrc:
        "https://sambapos.com/wp-content/uploads/03-Complete-Customization-image-copy-600x400.jpg",
    totalPrice: 2050,
    monthlyPrice: 500,
    area: "Restaurants",
    description: "this is a description",
};

export const projects: IProject[] = [
    testProject,
    testProject2,
    testProject,
    testProject2,
    testProject,
    testProject2,
    testProject,
    testProject2,
]
