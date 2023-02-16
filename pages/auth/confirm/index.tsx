import { 
    AuthLayout,
    WriteDownContainer,
    FormHeader,
    QuoteAppIcon,
    Button,
    ConfirmationContainer,
} from '../../../components';
import { ButtonType } from '../../../interfaces/enums';

type Props = {
    email?: string;
}

const Confirm = ({ email }: Props) => {
    return (
        <AuthLayout title="Verificar o código | Quote App">
            <div className="flex items-center justify-center py-4 px-2 h-screen">
                <section className='flex flex-col h-full justify-center my-4 mx-10 border-r-5 border-gray-500 w-1/2'>
                    <QuoteAppIcon />
                    <FormHeader 
                        title="Por favor, cheque seu email!!" 
                        subtitle={`Nós enviamos um email para ${email}`}
                    />
                    <div>
                        <form>
                            <ConfirmationContainer />
                            <div className='flex items-center justify-between gap-6'>
                                <Button buttonType={ButtonType.Cancel} />
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
