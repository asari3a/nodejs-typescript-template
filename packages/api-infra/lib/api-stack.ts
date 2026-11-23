import { Stack } from 'aws-cdk-lib';
import type { StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { LambdaConstruct } from '../../api/infra/lib/constructs/lambda';

interface ApiStackProps extends StackProps {
  bucketArn: string;
  objectKey: string;
}

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    new LambdaConstruct(this, 'Lambda', props.bucketArn, props.objectKey);
  }
}
