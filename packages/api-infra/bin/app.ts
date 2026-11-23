import * as cdk from 'aws-cdk-lib';
import { getStringValueFromSsm } from 'utils';

import { ApiStack } from '../lib/api-stack';

const app = new cdk.App();

// GetFrom Parameter Store
const artifactBucketArn = await getStringValueFromSsm('artifactBucketArn');
const objectKey = await getStringValueFromSsm('/api/artifact-object-key');

new ApiStack(app, 'ApiStack', { bucketArn: artifactBucketArn, objectKey });
