/* MAIL_MAILER=mailgun
MAILGUN_DOMAIN=mg.vura.club
MAILGUN_SECRET=key-9060ztxe36amdxsvbuzsfj0zgycfcfk8
MAILGUN_ENDPOINT="api.eu.mailgun.net"
MAIL_CSS_THEME=custom */
// /var/www/vura.club/shared/.env
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.vue',
      './storage/framework/views/*.php',
    ],
    options: {
      safelist: [
        'bg-blue-700',
        'bg-blue-400',
        'bg-yellow-500',
        'bg-yellow-300',
        'bg-green-700',
        'bg-green-400',
        'bg-rose-700',
        'bg-rose-400',
        'bg-gray-700',
        'bg-gray-400',
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        'myindigo' : '#995FF9',
        'myyellow' : '#E7B242',
        'graydark' : '#454545',
        'graybase' : '#525252',
        'graylight' : '#999999',
        'graylighter' : '#EFF0FB',
        'white' : '#ffffff'
      },
      fontFamily: {
        ui: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
