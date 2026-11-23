import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';

const client = new SSMClient({});

export const getStringValueFromSsm = async (name: string): Promise<string> => {
  const command = new GetParameterCommand({
    Name: name,
    WithDecryption: true,
  });

  const response = await client.send(command);

  const param = response.Parameter?.Value;
  if (param === undefined) {
    throw new Error();
  }

  return param;
};
