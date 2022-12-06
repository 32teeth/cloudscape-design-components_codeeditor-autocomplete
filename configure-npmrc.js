const { execSync } = require('child_process');
const { writeFileSync } = require('fs');

const registry = 'amazon-149122183214.d.codeartifact.us-west-2.amazonaws.com/npm/shared/';
const accountId = '787437774449';
const role = 'SharedRepoUser';

const writeNpmRc = async (authToken) => {
  const npmConfigTemplate = `
//${registry}:_authToken=${authToken}
//${registry}:always-auth=true
registry=https://${registry}
  `;

  await writeFileSync('.npmrc', npmConfigTemplate);
};

const getAuthToken = async () => {
  try {
    const response = await execSync(`ada credentials print --account ${accountId} --role ${role}`);
    const { AccessKeyId, SecretAccessKey, SessionToken } = JSON.parse(response.toString());

    const stdout = await execSync(
      `
    export AWS_ACCESS_KEY_ID=${AccessKeyId}
    export AWS_SECRET_ACCESS_KEY=${SecretAccessKey}
    export AWS_SESSION_TOKEN=${SessionToken}
    aws codeartifact get-authorization-token --domain amazon --domain-owner 149122183214 --region us-west-2
    `,
    );

    return JSON.parse(stdout.toString()).authorizationToken;
  } catch (e) {
    throw e;
  }
};

async function main() {
  try {
    const authToken = await getAuthToken();

    await writeNpmRc(authToken);

    // eslint-disable-next-line no-console
    console.log('😎 You are all set for the next 12 hours');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('😞', e.toString());
  }
}

main();
