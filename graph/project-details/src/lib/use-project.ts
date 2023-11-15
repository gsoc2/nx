import { useState } from 'react';
import sampleProjectGraph from '../assets/sample-project-graph.json';
import { ProjectConfiguration } from '@nx/devkit';

const useProject = (projectName: keyof typeof sampleProjectGraph.nodes) => {
  const [project] = useState<ProjectConfiguration>(
    sampleProjectGraph.nodes[projectName].data as ProjectConfiguration
  );

  return project;
};

export default useProject;
