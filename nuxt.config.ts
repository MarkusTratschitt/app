// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: [
        '~/assets/styles/main.less', 'vuetify/lib/styles/main.sass',
        ],
    build: {
        transpile: ['vuetify']
        },
    vite: {
        ssr: {
            noExternal: ['vuetify'],
        },
        plugins: [
            vuetify({
                autoImport: true,
            }),
        ],
        css: {
        preprocessorOptions: {
        less: {
            lessOptions: {
                strictMath: true,
                    },
                },
        // Pug kann automatisch in Nuxt verwendet werden
            },
        },
    },
    app: {
        head: {
            title: 'Markdown 2 JSON',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Dies ist eine Nuxt-Anwendung zum Umwandeln von Markdown in JSON.' },
                { name: 'author', content: 'Markus Tratschitt' },
                { property: 'og:title', content: 'Meine Nuxt Anwendung' },
                { property: 'og:description', content: 'Dies ist eine Nuxt-Anwendung mit Vuetify und benutzerdefinierten Stilen.' },
                { property: 'og:type', content: 'app' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        },
    }
})
