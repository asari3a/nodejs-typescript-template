import { Stack } from 'aws-cdk-lib';
import type { StackProps } from 'aws-cdk-lib';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

export class ObjectKeyParameterStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new StringParameter(this, 'ObjectKeyParam', {
      parameterName: '/api/artifact-object-key',
      stringValue: '-',
    });
  }
}
