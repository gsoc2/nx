import { useState } from 'react';

import sampleSourceMap from '../assets/sample-source-map.json';

const useSourceMap = (projectName: string) => {
  const [sourceMap] = useState<Record<string, string[]>>(
    (sampleSourceMap as Record<string, Record<string, string[]>>)[projectName]
  );

  return sourceMap;
};

export default useSourceMap;
