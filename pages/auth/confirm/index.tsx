import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { 
    AuthLayout,
    WriteDownContainer,
    FormHeader,
    QuoteAppIcon,
    Button,
    ConfirmationContainer,
} from '../../../components';
import { useAuth } from '../../../contexts/AuthContext';
import { useCodeConfirmation } from '../../../contexts/CodeContext';
import { ButtonType } from '../../../interfaces/enums';

const Confirm = () => {
    const { user, confirmCode } = useAuth();
    const { getCode } = useCodeConfirmation();
    const router = useRouter();

    useEffect(() => {
        if (Object.keys(user).length === 0) {
            router.push('/auth/register');
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const code = getCode();

        confirmCode(user.email, code).then((data) => {
            console.log('Success', data);
            alert('Sucesso! Agora já pode realizar o Login!!');
            router.push('/auth/login');
        }).catch((error) => {
            console.error(Error(error.message ?? error));
            alert(`Ocorreu algum erro... ${error.message ?? error}`);
        });
    }

    return (
        <AuthLayout title="Verificar o código | Quote App">
            <div className="flex items-center justify-center py-4 px-2 h-screen">
                <section 
                    className='flex flex-col h-full justify-center my-4 mx-10 border-r-5 border-gray-500 w-1/2'
                >
                    <QuoteAppIcon />
                    <FormHeader 
                        title="Por favor, cheque seu email!!" 
                        subtitle={`Nós enviamos um email para ${user.email}`}
                    />
                    <div>
                        <form onSubmit={handleSubmit}>
                            <ConfirmationContainer />
                            <div className='flex items-center justify-center gap-6'>
                                {/* <Button buttonType={ButtonType.Cancel} /> */}
                                <Button buttonType={ButtonType.Verify} />
                            </div>
                        </form>
                    </div>
                </section>
                <WriteDownContainer />
            </div>
        </AuthLayout>
    );
}

export default Confirm;
