'use client';
import { Category } from '@/models';
import { Alert } from '@aws-amplify/ui-react';
import { DataStore } from 'aws-amplify/datastore';
export default function AmplifyTest() {
  const handleTestBE = async () => {
    console.log('Here');
    await DataStore.save(
      new Category({
        name: 'All products',
        slug: 'all-products',
      })
    );
    const models = await DataStore.query(Category);
    console.log(models);
  };
  return (
    <Alert variation="success" isDismissible={true} hasIcon={true}>
      Amplify UI is working!
      <button onClick={handleTestBE}>Tuan</button>
    </Alert>
  );
}
