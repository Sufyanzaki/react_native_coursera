export type newsLetterRequestDto = {
    email: string;
};

export async function addNewsLetter(data: newsLetterRequestDto) {
    try {
        return await new Promise((resolve, reject) => setTimeout(() => {
            resolve({message: 'Added Successfully'});
        }, 500));
    } catch (error) {
        // Throw an error if something goes wrong
        throw { message: 'Invalid Credentials' };
    }
}