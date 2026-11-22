import * as cdk from 'aws-cdk-lib';

import { ArtifactS3Stack } from '../lib/artifacts-s3';

const app = new cdk.App();

new ArtifactS3Stack(app, 'ArtifactSstack');
