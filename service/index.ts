import service from './axios';
class Server {
    static meta = {
        baseUrl: '',
        baseFrogUrl: '',
        baseMarketUrl: ''
    };
    static postname = async (userid: string, _options: Record<string, any> = {}): Promise<any> => {
        return await service.get(`${this.meta.baseUrl}/../..`, { params: { userid } }, _options);
    };
    //

    //

    //
}

export default Server;
