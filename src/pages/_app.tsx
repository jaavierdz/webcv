import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/globals.css";
import type { AppProps } from "next/app";

// Componente de carga inicial con animación
const LoadingScreen = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-800 dark:to-purple-900">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-center"
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
                💼
            </motion.div>
            <motion.div
                animate={{
                    opacity: [1, 0.7, 1]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity
                }}
                className="text-2xl font-bold"
            >
                Bienvenido a mi CV
            </motion.div>
        </motion.div>
    </div>
);

export default function App({ Component, pageProps }: AppProps) {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const [pageKey, setPageKey] = useState(router.route);

    // Control de la animación de carga
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
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Mi CV Web - Portfolio Profesional</title>
                <meta name="description" content="Portfolio profesional y curriculum vitae web" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <AnimatePresence mode="wait">
                {isLoading ? (
                    <LoadingScreen key="loading" />
                ) : (
                    <motion.div
                        key={pageKey}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="min-h-screen relative overflow-hidden"
                    >
                        {/* Contenido principal */}
                        <Component {...pageProps} />

                        {/* Fondo decorativo animado */}
                        <div className="fixed inset-0 -z-10 pointer-events-none">
                            {/* Círculos decorativos */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full opacity-20 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600"
                                    style={{
                                        width: `${Math.random() * 300 + 100}px`,
                                        height: `${Math.random() * 300 + 100}px`,
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        x: [0, Math.random() * 30 - 15],
                                        y: [0, Math.random() * 30 - 15],
                                        scale: [1, Math.random() * 0.2 + 0.9, 1],
                                    }}
                                    transition={{
                                        duration: 15 + Math.random() * 10,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                />
                            ))}

                            {/* Partículas pequeñas */}
                            {[...Array(30)].map((_, i) => (
                                <motion.div
                                    key={`particle-${i}`}
                                    className="absolute w-1 h-1 rounded-full bg-blue-400 dark:bg-blue-300"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        opacity: [0.1, 0.5, 0.1],
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 5 + Math.random() * 5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}