import { authSlice } from '../../../store/auth/authSlice';

describe('Tests in authSlice', () => {
    test('Return initial state and first call to auth', () => {
        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer();
    });
});
