export default [
  {
    url: 'admin/dashboard',
    label: 'Početna',
    iconName: 'home',
    routeName: route('admin.dashboard'),
  },
  {
    url: 'admin/users',
    label: 'Korisnici',
    iconName: 'users',
    routeName: route('admin.users.index', { remember: 'forget' }),
  },
  {
    url: 'admin/worktravel',
    label: 'Work & travel',
    iconName: 'briefcase',
    // routeName: route('admin.applications.index', { remember: 'forget', type: 'worktravel' }),
    routeName: route('admin.worktravel.applications', { remember: 'forget' }),
  },
  {
    url: 'admin/aupair',
    label: 'Au pair',
    iconName: 'table',
    routeName: route('admin.aupair.applications', { remember: 'forget' }),
  },
  {
    url: 'admin/payments',
    label: 'Uplate',
    iconName: 'currency-euro',
    routeName: route('admin.payments.index', { remember: 'forget' }),
  },
  {
    url: 'messages/received_messages',
    label: 'Poruke',
    iconName: 'inbox',
    routeName: route('messages.received_messages.index', { remember: 'forget' }),
    unreadMessages: true
  },
  {
    url: 'admin/notices',
    label: 'Obavijesti',
    iconName: 'bell',
    routeName: route('admin.notices.index', { remember: 'forget' }),
    unreadNotices: true
  },
  {
    url: 'admin/sponsors',
    label: 'Sponzori',
    iconName: 'sparkles',
    routeName: route('admin.sponsors.index', { remember: 'forget' })
  },
  {
    url: 'admin/destinations',
    label: 'Destinacije',
    iconName: 'location-marker',
    routeName: route('admin.destinations.index', { remember: 'forget' })
  },
  {
    url: 'admin/languages',
    label: 'Strani jezici',
    iconName: 'globe',
    routeName: route('admin.languages.index', { remember: 'forget' })
  },
  {
    url: 'admin/worktravels',
    label: 'W&T poslovi',
    iconName: 'briefcase',
    routeName: route('admin.worktravels.index', { remember: 'forget' })
  },
  {
    url: 'user/profile/data',
    label: 'Profil',
    iconName: 'user-circle',
    routeName: route('user.profile.data'),
  },
  {
    url: 'admin/administrators',
    label: 'Administratori',
    iconName: 'user-add',
    routeName: route('admin.administrators', { remember: 'forget' }),
    superAdmin: true
  },
]
