export function authMiddleware(request: Request) {
    const token = request.headers.get('authorization')?.split(' ')[1];
    return { isValid: validate(token) }
}

function validate(token: string | undefined) {
    const isValid = true;
    if (!isValid || !token) {
        return false;
    }
    return true;
}
