export const apiUrl =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:4000/api"
        : "https://tushoes.herokuapp.com/api";

// export const apiUrl =
//     "https://tushoes.herokuapp.com/api";

export const accessToken = typeof window !== 'undefined' ? localStorage.getItem("accessToken") : null;

export const config = () => {
    return {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
};

