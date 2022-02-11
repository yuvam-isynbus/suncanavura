export default [
  {
    url: 'profile/data',
    label: 'Podaci',
    iconName: 'home',
    routeName: route('user.profile.data'),
  },
  {
    url: 'profile/password',
    label: 'Lozinka',
    iconName: 'users',
    // routeName: route('admin.users.index', { remember: 'forget' }),
    routeName: route('user.profile.password')
  },
]
