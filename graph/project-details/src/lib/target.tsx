import { TargetConfiguration } from '@nx/devkit';
import useSourceMap from './use-source-map';
import PropertyRenderer from './property-renderer';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface TargetProps {
  projectRoot: string;
  targetName: string;
  targetConfiguration: TargetConfiguration;
}

export function Target(props: TargetProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="ml-3">
      <h3 className="text-lg" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? '▶' : '▼'} {props.targetName}
      </h3>
      <div className={`ml-3 ${isCollapsed ? 'hidden' : ''}`}>
        {Object.entries(props.targetConfiguration).map(([key, value]) =>
          PropertyRenderer({
            projectRoot: props.projectRoot,
            propertyKey: key,
            propertyValue: value,
            keyPrefix: `targets.${props.targetName}`,
          })
        )}
      </div>
    </div>
  );
}

export default Target;
