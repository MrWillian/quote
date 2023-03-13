import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
    const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false);
    const { user, confirmCode } = useAuth();
    const { getCode, clearCode } = useCodeConfirmation();
    const router = useRouter();

    useEffect(() => {
        if (Object.keys(user).length === 0) {
            router.push('/auth/register');
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const code = getCode();
        setIsSubmitting(true);

        confirmCode(user.email, code).then((data) => {
            alert('Sucesso! Agora já pode realizar o Login!!');
            setIsSubmitting(false);
            clearCode();
            router.push('/auth/login');
        }).catch((error) => {
            alert(`Ocorreu algum erro... ${error.message ?? error}`);
            setIsSubmitting(false);
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
                                <Button buttonType={ButtonType.Verify} isSubmitting={isSubmitting} />
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
