/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/fetch"
            },
            {
                source: "/axios",
                destination: "/axios"
            }
        ]
    }
};

export default nextConfig;
