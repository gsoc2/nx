import { getSourceInformation } from './get-source-information';
import useSourceMap from './use-source-map';

/* eslint-disable-next-line */
export interface PropertyRendererProps {
  propertyKey: string;
  propertyValue: any;
  projectRoot: string;
  keyPrefix?: string;
}

export function PropertyRenderer(props: PropertyRendererProps) {
  const sourceMap = useSourceMap(props.projectRoot);

  if (typeof props.propertyValue === 'string') {
    return (
      <div
        title={JSON.stringify(
          sourceMap[
            `${props.keyPrefix ? `${props.keyPrefix}.` : ''}${
              props.propertyKey
            }`
          ]
        )}
      >
        <span className="font-medium">{props.propertyKey}</span>:{' '}
        <code>{props.propertyValue}</code>
      </div>
    );
  } else if (Array.isArray(props.propertyValue) && props.propertyValue.length) {
    return (
      <div>
        <span
          className="font-medium"
          title={JSON.stringify(
            getSourceInformation(
              sourceMap,
              `${props.keyPrefix ? `${props.keyPrefix}.` : ''}${
                props.propertyKey
              }`
            )
          )}
        >
          {props.propertyKey}
        </span>
        :{' '}
        {props.propertyValue.map((v) => (
          <code
            className="ml-2 bg-slate-300"
            title={JSON.stringify(
              getSourceInformation(
                sourceMap,
                `${props.keyPrefix ? `${props.keyPrefix}.` : ''}${
                  props.propertyKey
                }.${v}`
              )
            )}
          >
            {v}
          </code>
        ))}
      </div>
    );
  }
}

export default PropertyRenderer;
