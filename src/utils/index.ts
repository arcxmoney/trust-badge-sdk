import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// fetch project from process.env API_URL
export async function fetchProject(projectId: number): Promise<Project | any> {
    try {
        const res = await fetch(`https://api.frenreviews.com/projects/id/${projectId}`);
    
        if(!res.ok) {
          throw new Error('Network error');  
        }
    
        return res.json();
      
      } catch(error) {
        // Ideally pass error to error tracking service
        console.error(error); 
    
        throw error;
      }
}
