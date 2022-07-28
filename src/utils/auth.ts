import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export function requireAuthentication(gssp: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const { req, res } = context;
    const token = req.cookies.UserData;

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          statusCode: 302
        }
      };
    }

    return await gssp(context);
  };
}
