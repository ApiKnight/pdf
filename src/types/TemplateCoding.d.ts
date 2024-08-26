export interface Project {
    id: number;
    name: string;
    description?: string;
    startTime?: string;
    endTime?: string;
}

export interface Practice {
    id: number;
    name: string;
    description?: string;
    startTime?: string;
    endTime?: string;
}

export interface WorkExperience {
    id: number;
    name: string;
    description?: string;
    startTime?: string;
    endTime?: string;
}

export interface TemplateCodingType {
    id: string;
    name: string;
    age?: number;
    gender?: string;
    birthDate?: string;
    currentAddress?: string;
    homeAddress?: string;
    phone: string;
    email: string;
    aboutUrl?: string[];
    project?: Project[];
    practice?: Practice[];
    workExperience?: WorkExperience[];
    personSkills?: string;
    // 自我评价
    selfEvaluation?: string;
    // 荣誉
    honor?: string;
}

export type EditType = "project" | "workExperience" | "practice";