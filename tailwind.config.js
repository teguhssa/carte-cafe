import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        container: {
            // you can configure the container to be centered
            center: true,
      
            // or have default horizontal padding
            padding: '1rem',
      
            // default breakpoints but with 40px removed
            screens: {
              sm: '600px',
              md: '728px',
              lg: '984px',
              xl: '1200px',
            },
          },
    },

    plugins: [forms],
};
