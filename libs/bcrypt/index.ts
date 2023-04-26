import bcrypt from 'bcrypt';

export const encrypt = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const crypted: string = await bcrypt.hash(password, salt);
    return crypted
}