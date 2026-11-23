import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class LambdaConstruct extends Construct {
  public readonly func: lambda.IFunction;
  public readonly alias: lambda.Alias;

  constructor(scope: Construct, id: string, bucketArn: string, objectKey: string) {
    super(scope, id);

    const bucket = s3.Bucket.fromBucketArn(this, 'ArtifactBucket', bucketArn);

    const func = new lambda.Function(this, 'Lambda', {
      runtime: lambda.Runtime.NODEJS_24_X,
      handler: 'index.handler',
      code: lambda.Code.fromBucket(bucket, objectKey),
    });

    const version = func.currentVersion;

    this.func = func;
    this.alias = new lambda.Alias(this, 'Alias', {
      aliasName: 'live',
      version,
    });
  }
}
