import version from './Version';
import status from './Status';
import Express from '../Utils/Express';

const app = Express.getExpressApp();

app.use('/version', version);
app.use('/status', status);