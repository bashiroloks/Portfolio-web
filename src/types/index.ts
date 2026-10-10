export interface Project {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Deep Learning' | 'Big Data' | 'Data Cleaning' | 'Data Analysis';
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  demoUrl?: string;
  dataCleaningHighlights: string[];
  modelingStrategy: string;
  keyInsights: string[];
  interactiveDemoType?: 'churn' | 'forecast' | 'vision' | 'cleaning';
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experience: string;
    description: string;
  }[];
}

export interface WorkflowStep {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  iconName: string;
  tools: string[];
  sampleCode: string;
  inputData: Record<string, string | number>[];
  outputData: Record<string, string | number>[];
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'experience' | 'education' | 'certification';
  description: string;
  bullets: string[];
  tags: string[];
}
