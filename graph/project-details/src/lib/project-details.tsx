// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Target from './target';

import PropertyRenderer from './property-renderer';
import { useRouteLoaderData } from 'react-router-dom';

/* eslint-disable @nx/enforce-module-boundaries */
// nx-ignore-next-line
import { ProjectGraphProjectNode } from '@nx/devkit';

export function ProjectDetails() {
  const {
    name,
    data: { targets, root, ...projectData },
  } = useRouteLoaderData('selectedProjectDetails') as ProjectGraphProjectNode;

  return (
    <div className="m-4">
      <h1 className="text-2xl">{name}</h1>
      <h2 className="text-lg pl-6 mb-3">{root}</h2>
      <div>
        <div className="mb-2">
          <h2 className="text-xl">Targets</h2>
          {Object.entries(targets ?? {}).map(([targetName, target]) =>
            Target({
              targetName: targetName,
              targetConfiguration: target,
              projectRoot: root,
            })
          )}
        </div>
        {Object.entries(projectData).map(([key, value]) => {
          if (
            key === 'targets' ||
            key === 'root' ||
            key === 'name' ||
            key === '$schema'
          )
            return undefined;
          return PropertyRenderer({
            propertyKey: key,
            propertyValue: value,
            projectRoot: root,
          });
        })}
      </div>
    </div>
  );
}

export default ProjectDetails;
