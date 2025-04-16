import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";
import type { AppProps } from "next/app";

// Componente de carga inicial con animación
const LoadingScreen = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl font-bold"
        >
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                }}
                className="mb-6 text-6xl"
            >
                ✨
            </motion.div>
            <motion.div
                animate={{
                    opacity: [1, 0.7, 1]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity
                }}
            >
                Cargando...
            </motion.div>
        </motion.div>
    </div>
);

export default function App({ Component, pageProps }: AppProps) {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const [pageKey, setPageKey] = useState(router.route);

    // Simular tiempo de carga y mostrar pantalla de carga
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Actualizar la key de página cuando cambia la ruta
    useEffect(() => {
        setPageKey(router.route);
    }, [router.route]);

    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <AnimatePresence mode="wait">
                {isLoading ? (
                    <LoadingScreen key="loading" />
                ) : (
                    <motion.div
                        key={pageKey}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="min-h-screen"
                    >
                        <div className="page-transition-wrapper">
                            <Component {...pageProps} />
                        </div>

                        {/* Partículas de fondo */}
                        <div className="fixed inset-0 -z-10 pointer-events-none">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        x: [0, Math.random() * 100 - 50],
                                        y: [0, Math.random() * 100 - 50],
                                        opacity: [0.2, 0.8, 0.2],
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 10 + Math.random() * 20,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </ThemeProvider>
    );
}