import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json';

const amplifyConfig = parseAmplifyConfig(outputs);

Amplify.configure(outputs, { ssr: true });

export default function AmplifyConfig() {
  return null;
}
