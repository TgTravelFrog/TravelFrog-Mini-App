declare const localStorage: any;
export const Storage = {
    setItem: (key: string, value: any) => {
        localStorage[key] = value;
    },
    getItem: (key: string) => {
        return localStorage[key] === undefined ? '' : localStorage[key];
    },
    setObject(key: string, value: any) {
        try {
            localStorage[key] = JSON.stringify(value);
        } catch (e: any) {
            alert(e.message);
        }
    },
    removeItem(key: string) {
        localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    }
};
