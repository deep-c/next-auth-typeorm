import { NextApiRequest, NextApiResponse } from 'next';
import { sentryMiddleware } from '@/common/middleware';

export default sentryMiddleware(async (req: NextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200;
    res.json({ name: 'John Doe' });
});
