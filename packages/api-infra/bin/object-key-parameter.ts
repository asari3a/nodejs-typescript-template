import { App } from 'aws-cdk-lib';

import { ObjectKeyParameterStack } from '../lib/object-parameter-stack';

const app = new App();

new ObjectKeyParameterStack(app, 'ObjectKeyParamStack');
