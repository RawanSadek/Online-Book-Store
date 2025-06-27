export const emailValidation = {
    required: "Invalid email !"
};

export const loginPasswordValidation = {
    required: "Password is required!"
};

export const regPasswordValidation = {
    required: {
        value: true,
        message: "Password is required."
    },
    pattern: {
        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,12}$/,
        message: "Password must be 8-12 characters long and include at least one uppercase letter, one number, and one special character (e.g., ! @ # $ % ^ & )."
    }
};

export const otpValidation = {
    required: "Invalid OTP !"
};

export const nameValidation = {
    required: "Name is required !"
} ;