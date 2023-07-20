import { useSession, signIn } from 'next-auth/react';
import { nanoquery } from '@nanostores/query';
import { useStore } from '@nanostores/react';

const [createFetcherStore] = nanoquery(
    { fetcher: (...keys) => fetch(keys.join('')).then(r => r.json()), }),
    $characters = createFetcherStore(['/api/restricted/myaccount']);

export default function MyAccount() {
    const sessionHookResult = useSession();
    const storeHookResult = useStore($characters);
    return <>
    <div className='my-account'>

    </div>
        <button onClick={() => signIn()}>Добавить аккаунт</button>
        <pre>{JSON.stringify(sessionHookResult, null, '\t')}</pre>
        <pre>{JSON.stringify(storeHookResult, null, '\t')}</pre>
    </>;
}