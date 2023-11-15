// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Target from './target';
import useProject from './use-project';

import useSourceMap from './use-source-map';
import { getSourceInformation } from './get-source-information';
import PropertyRenderer from './property-renderer';

export function App() {
  const projectName = 'large-pkg1';
  const projectRoot = 'packages/large-pkg1';
  const sourceMap = useSourceMap(projectRoot);
  const project = useProject(projectName);

  return (
    <div className="m-4">
      <h1 className="text-2xl">{project.name}</h1>
      <h2 className="text-lg pl-6 mb-3">{project.root}</h2>
      <div>
        <div className="mb-2">
          <h2 className="text-xl">Targets</h2>
          {Object.entries(project.targets ?? {}).map(([targetName, target]) =>
            Target({
              targetName: targetName,
              targetConfiguration: target,
              projectRoot,
            })
          )}
        </div>
        {Object.entries(project).map(([key, value]) => {
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
            projectRoot,
          });
        })}
      </div>
    </div>
  );
}

export default App;
