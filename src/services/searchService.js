import * as request from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const req = await request.get('/users/search', {
            params: {
                q,
                type,
            },
        });
        return req.data;
    } catch (error) {
        console.log(error);
    }
};
