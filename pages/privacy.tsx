import Layout from '../components/Layouts/Layout';
import { useTranslation } from "react-i18next";

const PrivacyPage = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t('privacy.page_title')}>
            <div className="flex flex-col items-center justify-around pt-10">
                <h1 className="text-2xl font-black leading-normal tracking-widest drop-shadow-lg shadow-black">
                    {t('privacy.title')}
                </h1>
                <p className="font-['Comfortaa-Regular'] mt-5">
                        Nós, da Quote App, estamos comprometidos em resguardar sua privacidade. O intuito deste 
                    documento é esclarecer quais informações são coletadas dos usuários de nosso Aplicativo. 
                    A Quote App reconhece que a sua privacidade é muito importante, portanto, tomamos todas as 
                    medidas possíveis para protegê-la. Nesse sentido, a presente Política de Privacidade visa lhe informar 
                    como as suas informações e dados serão coletados, usados, compartilhados e armazenados por meio do
                    nosso aplicativo e respectivos serviços.
                </p>
                <p className="font-['Comfortaa-Regular'] mt-5">
                        A aceitação da nossa Política será feita quando você se cadastrar em nossa plataforma, mesmo que de forma 
                    gratuita. Isso indicará que você está ciente e em total acordo com a forma como utilizaremos as suas 
                    informações e seus dados.
                        Caso não concorde com esta Política, peçamos que não continue o seu procedimento de registro e não use os 
                    nossos serviços. Todavia, por favor, nos informe a sua discordância para que possamos melhorá-los.
                    Qualquer dúvida em relação à nossa política de privacidade pode ser esclarecida entrando em contato conosco.
                    Além de qualquer intenção de nos informar sua discordância. 
                        Envie um e-mail para williansoares.dev@gmail.com.
                </p>

                <h1 className='mt-10 text-2xl font-black leading-normal tracking-widest drop-shadow-lg shadow-black'>
                    1 - Coleta de dados
                </h1>

                <p className="font-['Comfortaa-Regular'] mt-5">
                    Nós coletamos algumas informações de identificação pessoal para o seu registro no aplicativo, essas 
                    informações incluem, nome e e-mail, além de sua senha para acesso, cuja esta, asseguramos
                    que seja segura, por exemplo, que ela tenha pelo menos 8 caracteres, entre eles, pelo menos um especial (!@#$%^&.*), 
                    um número, uma letra e um símbolo, e não utilizar uma sequência ou nomes próprios.
                </p>
                
                <h1 className='mt-10 text-2xl font-black leading-normal tracking-widest drop-shadow-lg shadow-black'>
                    2 - Uso do seus dados pessoais
                </h1>

                <p className="font-['Comfortaa-Regular'] mt-5">
                    Todos os dados que coletamos são utilizados para a prestação de nossos serviços, e aqui, prezamos muito a 
                    sua privacidade. Por isso, todos os seus dados são dados como confidenciais, e só as utilizaremos para os
                    fins descritos aqui, e autorizados por você.
                </p>

                <p className="font-['Comfortaa-Regular'] mt-5">
                        Seu e-mail é utilizado para o registro de seu usuário, e também pode ser usado para envio de Newsletters 
                    relacionadas ao assunto que tratamos na plataforma.
                        As informações registradas por você em nossa plataforma só serão vistas por você em seu dispositivo, então você pode seguramente 
                    cadastrar qualquer que seja a recordação que deseja consultar no futuro.
                </p>

                <p className="font-['Comfortaa-Regular'] mt-5">
                    Eventualmente, poderemos utilizar dados para finalidades não previstas nesta política de privacidade, mas 
                    estas estarão dentro das suas legítimas expectativas. O eventual uso dos seus dados para finalidades que 
                    não cumpram com essa prerrogativa será feito mediante sua autorização prévia.
                </p>
                
                <h1 className='mt-10 text-2xl font-black leading-normal tracking-widest drop-shadow-lg shadow-black'>
                    3 - Acesso aos seus dados pessoais
                </h1>
                
                <p className="font-['Comfortaa-Regular'] mt-5">
                    Todos os seus dados são confidenciais e qualquer usos destes estará de acordo com a presente Política.
                    Manteremos os dados e informações somente até quando estas forem necessárias ou relevantes para as 
                    finalidades descritas nesta Política, ou em caso de períodos pré-determinados por lei.
                </p>
                
                <p className="font-['Comfortaa-Regular'] mt-5">
                    Consideramos a sua privacidade algo muito importante e faremos tudo que estiver ao nosso alcance para
                    protegê-la. Todavia, não temos como garantir complemente que todos os dados e informações sobre você em
                    nossa plataforma estarão livres de acessos não autorizados, principalmente caso haja compartilhamento
                    indevido das credenciais necessárias para acessar a nossa plataforma. Portanto, você é o único responsável
                    por manter sua senha de acesso em local seguro e é vedado o compartilhamento desta com terceiros.
                </p>
                
                <h1 className='mt-10 text-2xl font-black leading-normal tracking-widest drop-shadow-lg shadow-black'>
                    4 - Compartilhamento de dados
                </h1>
                
                <p className="font-['Comfortaa-Regular'] mt-5">
                    Não compartilhamos de maneira alguma os seus dados informados.
                </p>
                
                <h1 className='mt-10 text-2xl font-black leading-normal tracking-widest drop-shadow-lg shadow-black'>
                    5 - Alteração/exclusão de informações pessoais
                </h1>
                
                <p className="font-['Comfortaa-Regular'] mt-5">
                    Todos os dados coletados serão excluídos de nossos servidores quando você assim requisitar.
                </p>
                
                <h1 className='mt-10 text-2xl font-black leading-normal tracking-widest drop-shadow-lg shadow-black'>
                    6 - Mudanças na Política de Privacidade
                </h1>
                
                <p className="font-['Comfortaa-Regular'] mt-5">
                    Essa Política de Privacidade pode passar por atualizações. Desta forma, recomendamos visitar periodicamente
                    esta página para que você tenha conhecimento sobre as modificações. Caso sejam feitas alterações relevantes
                    que ensejem novas autorizações suas, publicaremos uma nova política de privacidade.
                    Antes de usar informações para outros fins que não os definidos nesta Política de Privacidade, 
                    solicitaremos sua autorização.
                </p>
                
                <h1 className='mt-10 text-2xl font-black leading-normal tracking-widest drop-shadow-lg shadow-black'>
                    7 - Lei Aplicável
                </h1>
                
                <p className="font-['Comfortaa-Regular'] mt-5 mb-10">
                    Este documento é regido e deve ser interpretado de acordo com as leis da República Federativa do Brasil.
                </p>
            </div>
        </Layout>
    )
}

export default PrivacyPage;
