import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';


var faro = initializeFaro({
    url: 'https://faro-collector-prod-ap-south-0.grafana.net/collect/191087ccbd1ce7eb85f8db7901c9cef8',
    app: {
      name: 'faro-next-app',
      version: '1.0.0',
      environment: 'production'
    },
    instrumentations: [
      // Mandatory, overwriting the instrumentations array would cause the default instrumentations to be omitted
      ...getWebInstrumentations(),
  
      // Initialization of the tracing package.
      // This packages is optional because it increases the bundle size noticeably. Only add it if you want tracing data.
      new TracingInstrumentation(),
    ],
  });
  
  // will be captured
  console.info('hello world');
  
  // push log explicitly
  faro.api.pushLog(['hello world']);
  
  // will be captured
  //throw new Error('oh no');
  
  // push error manually
  faro.api.pushError(new Error('oh no'));

  export default function UI() {
  
    return <h1> Hello Faro </h1>;
  }