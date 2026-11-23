import { Stack, CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import type { StackProps } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

export class ArtifactS3Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'ArtifactS3', {
      versioned: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new ssm.StringParameter(this, 'ArtifactS3Arn', {
      parameterName: 'artifactBucketArn',
      stringValue: bucket.bucketArn,
    });

    new CfnOutput(this, 'ArtifactS3BucketArn', {
      value: bucket.bucketArn,
    });
  }
}
