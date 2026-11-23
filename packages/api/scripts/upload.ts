import { readFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { parseArgs } from 'node:util';

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({});

const uploadToS3 = async (path: string, bucketName: string, objectKey: string) => {
  const body = await readFile(path);
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: objectKey,
    Body: body,
    ContentType: 'application/zip',
  });

  await s3.send(command);
};

async function main(args: string[]) {
  const {
    values: { bucketArn, path: filePath },
  } = parseArgs({
    args,
    options: {
      bucketArn: { type: 'string' },
      path: { type: 'string' },
    },
  });
  if (!bucketArn || !filePath) {
    throw new Error('Usage: pnpm -F api run upload --bucketArn <bucket-arn> --path <file-path>');
  }

  const bucketName = /^arn:[a-z0-9-]+:s3:::([a-z0-9][a-z0-9.-]{1,61}[a-z0-9])$/.exec(
    bucketArn,
  )?.[1];
  if (!bucketName) {
    throw new Error('Expected an S3 bucket ARN, e.g. arn:aws:s3:::example-bucket');
  }

  const objectKey = basename(filePath);
  await uploadToS3(filePath, bucketName, objectKey);
  console.log(objectKey);
}

try {
  await main(process.argv.slice(2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
