// This file defines the "shape" or structure for a project object.
export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  imageUrl: string;
  details: string;
}

