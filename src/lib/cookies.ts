export type CookieOptions = {
    path?: string;
    maxAge?: number; // seconds
    expires?: Date;
    sameSite?: 'Lax' | 'Strict' | 'None';
    secure?: boolean;
    domain?: string;
};

function serializeCookie(name: string, value: string, opts: CookieOptions = {}) {
    const options: CookieOptions = { path: '/', ...opts };
    let str = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (options.maxAge !== undefined) {
        str += `; Max-Age=${Math.floor(options.maxAge)}`;
    }
    if (options.expires instanceof Date) {
        str += `; Expires=${options.expires.toUTCString()}`;
    }
    if (options.domain) {
        str += `; Domain=${options.domain}`;
    }
    if (options.path) {
        str += `; Path=${options.path}`;
    }
    if (options.sameSite) {
        str += `; SameSite=${options.sameSite}`;
    }
    if (options.secure) {
        str += `; Secure`;
    }
    return str;
}

export function setCookie(name: string, value: string, opts?: CookieOptions) {
    if (typeof document === 'undefined') return;
    const cookie = serializeCookie(name, value, opts);
    document.cookie = cookie;
}

export function getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return m ? decodeURIComponent(m[2]) : null;
}

export function deleteCookie(name: string, opts?: CookieOptions) {
    setCookie(name, '', { ...(opts || {}), expires: new Date(0) });
}