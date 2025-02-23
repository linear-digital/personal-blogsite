const baseUrl = 'https://server.genzit.xyz/api';

export const fetcher = async ({ path, headers, body, method, params }) => {
    try {
        const response = await fetch(baseUrl + path, {
            method: method || "GET",
            headers: {
                ...headers,
                "Content-Type": "application/json",
            },
            body: body ? JSON.stringify(body) : null,
            cache: "no-store", // 🔹 Prevents caching
        });

        const json = await response.json();
        return json;
    } catch (error) {
        throw error;
    }
};