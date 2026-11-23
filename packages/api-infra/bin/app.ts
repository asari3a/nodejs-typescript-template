import * as cdk from 'aws-cdk-lib';

import { ObjectKeyParameterStack } from '../../api/infra/lib/stack/stack';

const app = new cdk.App();

new ObjectKeyParameterStack(app, 'ObjectKeyParameter');
